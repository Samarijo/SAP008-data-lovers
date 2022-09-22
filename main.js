
import data from './data/harrypotter/data.js';

import {filterBySearch, filterHouse, sortByName} from './data.js';

const personagens = data.characters;

function printCards(hp) {
    document.getElementById('characters').innerHTML = hp.map((personagem) => 
        `  
            <div>
                <p>Name: ${personagem.name}</p>          
            </div>
        `    
    ).join("")
}

printCards(personagens)



function filterByHouse(e) {
    const houseSelec = e.target.value;
    const filter = filterHouse(personagens, houseSelec)
    printCards(filter)
}

const houseFilter = document.getElementById("inputFilter")
houseFilter.addEventListener ("change", filterByHouse)

function sortCharacters (e) {
    const order = e.target.value
    const sorted = sortByName(personagens, order)
    printCards(sorted)
}

const sortSelect = document.getElementById("sort")
sortSelect.addEventListener("change", sortCharacters)

function search(e) {
    const nameInserido = e.target.value
    const busca = filterBySearch(personagens, nameInserido)
    printCards(busca)

}

const searchName = document.getElementById("input-search")
searchName.addEventListener("keyup", search)

