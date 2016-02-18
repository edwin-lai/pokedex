var PokemonActions = require('../actions/pokemonActions.js');

var apiUtil = {
  fetchAllPokemons: $.get('api/pokemon', function(data){
    PokemonActions.receiveAllPokemons(data);
  })
};

module.exports = apiUtil;
