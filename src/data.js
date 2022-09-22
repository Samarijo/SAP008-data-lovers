export function filterHouse(data,house){
    return data.filter(character => character.house === house)
}

export function sortByName(characters, order){
    const charactersCopy = [...characters]
    const sorted = charactersCopy.sort((a,b) => {
        if (a.name < b.name){
            return -1
        }

        if (a.name > b.name){
            return 1
        }

        return 0   
    })

    if (order === "asc"){
        return sorted
    }

    else if (order === "desc"){
        return sorted.reverse()
    }
}

export function filterBySearch(data,name){
    const nameInLowerCase = name.toLowerCase()
    return data
        .filter(character => character.name.toLowerCase().includes(nameInLowerCase))

}








