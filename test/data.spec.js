import { filterHouse, sortByName, filterBySearch, calculoAgregado } from '../src/data.js';

const Gryffindor = {
      "name": "Euan Abercrombie",
      "birth": "between 1 September 1983 and 31 August 1984",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male", 
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Gryffindor"
}

const Ravenclaw = {
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Ravenclaw"
}

const Slytherin = {
      "name": "Terence Higgs",
      "birth": "31 August 1979 or earlier",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Slytherin"
}


describe('filterHouse', () => {
  const objHouse = [Gryffindor,Ravenclaw,Slytherin]
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('deve filtrar o personagem pela sua casa', () => {
    expect(filterHouse(objHouse,"Gryffindor")).toEqual([Gryffindor]);
  });
});


describe('sortByName', () => {
  const orderAlf = [Gryffindor,Slytherin,Ravenclaw]
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('deve ordenar os personagens por A-Z', () => {
    expect(sortByName(orderAlf, "asc")).toEqual([Gryffindor, Ravenclaw, Slytherin]);
  });
  it('deve ordenar os personagens por Z-A', () => {
    expect(sortByName(orderAlf, "desc")).toEqual([Slytherin,Ravenclaw,Gryffindor]);
  });
})

describe('filterBySearch', () => {
  const filtroSearch = [Gryffindor,Ravenclaw,Slytherin]
  it('is a function', () => {
    expect(typeof filterBySearch).toBe('function');
  });

  it('deve filtrar o personagem pelo nome digitado', () => {
    expect(filterBySearch(filtroSearch,"Euan Abercrombie")).toEqual([Gryffindor]);
  });
});

describe('calculoAgregado', () => {
  const calcule = ["Euan Abercrombie","Stewart Ackerley","Terence Higgs"]
  it('é função', () => {

    expect(typeof calculoAgregado).toBe('function');
  });

  it('deve retornar a quantidade de membros de cada casa', () => {
    expect(calculoAgregado(calcule, "Gryffindor")).toEqual(3);
  });
});