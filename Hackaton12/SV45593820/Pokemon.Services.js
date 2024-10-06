export class PokemonService {

  pokemonsDiv = '';
  URL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor() {
    this.pokemonsDiv = document.getElementById('pokemons');
  }

  async getPokemonsByPage(page, limit) {
    try {
      const response = await fetch(`${this.URL}?offset=${(page - 1) * limit}&limit=${limit}`);    
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la conexión:', error.message);
      throw error;
    }
  }

  async getPokemonByUrl(url) {
    try {
      return fetch(url);
    } catch (error) {
      console.error('Error en la conexión:', error.message);
      throw error;
    }
  }


  insertPokemonList(pokemon) {
    const pokemonHTML = `
      <div id="${pokemon.id}" class="pokemon" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      </div>
    `;

    this.pokemonsDiv.insertAdjacentHTML('beforeend', pokemonHTML);

    document.getElementById(pokemon.id).addEventListener('click', () => {
      this.showPokemonInfo(pokemon);
    });
  }

  showPokemonInfo(pokemon) {
    document.getElementById('modalTitle').innerText = pokemon.name;
    document.getElementById('modalImg').setAttribute('src', pokemon.sprites.front_default);
  }

  clearPokemonDiv() {
    this.pokemonsDiv.innerHTML = '';
  }
}