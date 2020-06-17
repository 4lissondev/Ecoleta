function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=> { return res.json()})
    .then( states=> {


        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }

    })
}



populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    
    

    const ufValue  = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione A Cidade</option>"
    citySelect.disabled


    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        citySelect.innerHTML = ""

        for( const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

        }

        citySelect.disabled = false

    })

}




document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// itens de coleta
// pegar todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li ")

for (const item of itemsToCollect){
    item.addEventListener("click",handleSelectedItem)

}

const  collectedItems = document.querySelector("input[name=items]")


let selectedItems = []


function handleSelectedItem(event) {
    const itemLi = event.target

    //Adicional ou remover uma classe no java script
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    // verificar se existe itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso sera true ou false
        return itemFound
    })

    
    // se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0){
        //TIRAR DA SELEÇÃO
        const filteredItems = selectedItems.filter( item =>{
            const itemIsDifferent = item != itemId
            return false
        })

        selectedItems = filteredItems
    }else {
        // se não estiver , adicionar á seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os items selecionados
    collectedItems.value = selectedItems
}
    
    

 