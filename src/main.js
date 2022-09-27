
import data from './data/harrypotter/data.js';

import {filterBySearch, filterHouse, sortByName, calculoAgregado} from './data.js';

const personagens = data.characters;

function printCards(hp) {
    document.getElementById('characters').innerHTML = ``
    hp.forEach((personagem) => {
        const container = document.createElement("div")
        container.innerHTML = `
                                <p id="${personagem.id}">Name: ${personagem.name}</p>
                              `
        container.addEventListener("click", ()=> modal(personagem))
        document.getElementById('characters').appendChild(container)
    })
}

printCards(personagens)

function modal(personagem){
    const modalElement = document.getElementById("modal-click")
    modalElement.style.display = "block"
    modalElement.innerHTML = `  
    <div>
        <p>Name: ${personagem.name}</p>
        <p>Birth: ${personagem.birth}</p>
        <p>Death: ${personagem.death}</p>
        <p>Species: ${personagem.species}</p>
        <p>Ancestry: ${personagem.ancestry}</p>
        <p>Gender: ${personagem.gender}</p>
        <p>Patronus: ${personagem.patronus}</p>
        <p>House: ${personagem.house}</p>
        <p>Books featured in: ${personagem.books_featured_in}</p>
        <button id="fechar-modal" class="filter-flex" > fechar </button>

    </div>
`
    const fechar = modalElement.querySelector("#fechar-modal")
    fechar.addEventListener("click", ()=> {
        modalElement.style.display = "none"

    })
}

function filterByHouse(e) {
    const houseSelec = e.target.value;
    const filter = filterHouse(personagens, houseSelec)
    printCards(filter)

    const quantidade = calculoAgregado(personagens,"house", houseSelec)
    statistic.innerHTML = printStatistic(quantidade, houseSelec)
}

const houseFilter = document.getElementById("inputFilter")
houseFilter.addEventListener ("change", filterByHouse)

function sortCharacters (e) {
    const order = e.target.value
    document.getElementById('houses-members').innerHTML = ``
    const sorted = sortByName(personagens, order)
    printCards(sorted)
}

const sortSelect = document.getElementById("sort")
sortSelect.addEventListener("change", sortCharacters)

function search(e) {
    const nameInserido = e.target.value
    document.getElementById('houses-members').innerHTML = ``
    const busca = filterBySearch(personagens, nameInserido)
    printCards(busca)

}

const searchName = document.getElementById("input-search")
searchName.addEventListener("keyup", search)

const statistic = document.getElementById("houses-members")

function printStatistic(total, house) {
    return `
             <p>House ${house} has ${total} members</p>

            `
}


