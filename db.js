//importando o sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar objeto que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db
//utiizar ob do banco de dados para nossas operaçoes
db.serialize(() =>{
    //criar uma tabela
    //db.run(` 
    //    CREATE TABLE IF NOT EXISTS places (
    //        id  INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        adress TEXT,
    //        adress2 TEXT,
    //        state TEXT,
    //        city TEXT,
    //        items TEXT
    //    );
    //`)
    //inserir dados na tabela
    //const query =`
    //    INSERT INTO places (
    //        image,
    //        name,
    //        adress,
    //        adress2,
    //        state,
    //        city,
    //        items
    //    ) VALUES (?,?,?,?,?,?,?);
    // `      
    //
    //const values = [
    //    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    //    "Papersider",
    //    "Guilherme Gemballa, Jardim América",
    //    "Número 260",
    //    "Santa Catarina",
    //    "Rio do Sul",
    //    "Residuos Eletrônicos, Lâmpadas"
    //]

    //function afterInsertData(err){
    //    if(err){
    //        return console.log(err)
    //    }
    //
    //    console.log("Cadastrado com Sucesso")
    //    console.log(this)
    //}
    //db.run(query,values,afterInsertData)

    //consultar um dado da tabela
    //db.all(`SELECT name FROM places`, function(err, rows){
    //    if(err){
    //        return console.log(err)
    //    }
    //
    //    console.log("Aqui estão seus registros")
    //    console.log(rows)
    //})
    
    //Deletar um dado da tabela

    //db.run(`DELETE FROM places WHERE id = ?`, [6],function(err){
    //    if(err){
    //        return console.log(err)
    //    }
    //
    //    console.log("Registro deletado com sucesso!")
    //})

})