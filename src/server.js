const express = require("express")
const server = express()

//pegar o banco de dados

const db = require("./database/db")

// configurar pasta publica

server.use(express.static("public"))

server.use(express.urlencoded({ extended:true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
//configurara caminhos da aplicação
//pagina inicial
// req: requisão
//res: resposta
server.get("/",(req, res) =>{
    return res.render("index.html", {title: "Um Titulo"})
})

server.get("/creat-point",(req, res) =>{
    //req.query: Query strings da url

        return res.render("creat-point.html")
})

server.post("/savepoint",(req,res) => {

    //inserir dados na tabela
    const query =`
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
     `      
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
        }
    
        console.log("Cadastrado com Sucesso")
        console.log(this)

        return res.render("creat-point.html", {saved: true})

        
    }
    db.run(query,values,afterInsertData)


    return res.send(req.body.image)
    
})





server.get("/search",(req, res) =>{

    const search = req.query.search

    if (search == "") {
        // Pesquisa vazia
        return res.render("search-results.html", {total: 0})


    }





    //pegar os dados do banco de dados 
    db.all(`SELECT * FROM places WHERE city L nIKE %'${search}'%`, function(err, rows){
            if(err){
                return console.log(err)
            }

            const total = rows.length

            //mostrar a  pagina html, com os dados do banco de dados
            return res.render("search-results.html", {places: rows, total: total})
                
    })
})
//ligar o servidor
server.listen(777)