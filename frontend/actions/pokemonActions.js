var Dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemonConstants.js');

var PokemonActions = {
  receiveAllPokemons: function (data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    });
  },

  receiveSinglePokemon: function(data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: data
    });
  }
};

module.exports = PokemonActions;
