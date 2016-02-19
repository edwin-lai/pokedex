var Store = require("flux/utils").Store;
var Dispatcher = require("../dispatcher/dispatcher.js");
var PokemonConstants = require("../constants/pokemonConstants.js");


var _pokemons = {};

var PokemonStore = new Store(Dispatcher);

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(item){
    _pokemons[item.id] = item;
  });
};

PokemonStore.resetPokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.resetPokemon(payload.pokemon);
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.find = function(id){
  return _pokemons[id];
};

PokemonStore.all = function(){
  return Object.keys(_pokemons).map(function(item){
    return _pokemons[item];
  });
};

module.exports = PokemonStore;
