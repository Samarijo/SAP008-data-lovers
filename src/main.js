import { example } from './data.js';
import data from './data/harrypotter/data.js';


const personagens = data.characters;

console.log(personagens)
function printCards(hp) {
    document.getElementById('print').innerHTML = hp.map((key) => 
        `  
            <div>
                <h2>Name: ${key.name}</h2>          
            </div>
        `    
    )
}

printCards(personagens)