var PokemonActions = require('../actions/pokemonActions.js');

var apiUtil = {
  fetchAllPokemons: $.get('api/pokemon', function(data){
    PokemonActions.receiveAllPokemons(data);
  }),

  fetchOnePokemon: function(id) {
    return $.get('api/pokemon/' + id, function(data){
      PokemonActions.receiveSinglePokemon(data);
    });
  }
};

module.exports = apiUtil;
