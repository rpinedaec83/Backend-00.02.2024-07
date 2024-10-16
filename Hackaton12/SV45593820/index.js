import { PokemonService } from "./Pokemon.Services.js";

let currentPage = 1;
const pokemonService = new PokemonService();

const getPokemonsByPage = async (page, limit) => {
  let pokemons = await pokemonService.getPokemonsByPage(page, limit);

  pokemons.results.map(async (p) => {
    await pokemonService.getPokemonByUrl(p.url)
    .then(response => response.json())
    .then(data => pokemonService.insertPokemonList(data));
  });
}

const onNextPage = () => {
  pokemonService.clearPokemonDiv();

  currentPage++;
  getPokemonsByPage(currentPage, 10);
}

const onBackPage = () => {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
    return;
  };

  pokemonService.clearPokemonDiv();
  getPokemonsByPage(currentPage, 10);
}

// const showPokemonInfo = (pokemon) => {
//   console.log(pokemon);
// }

document.getElementById('btnNext').addEventListener('click', onNextPage);
document.getElementById('btnBack').addEventListener('click', onBackPage);

getPokemonsByPage(currentPage, 10);
