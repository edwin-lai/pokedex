var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var PokemonIndexItem = require("./PokemonIndexItem.jsx");
var apiUtil = require('../../util/apiUtil.js');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {
      pokemons: []
    };
  },

  componentWillMount: function () {
    return apiUtil.fetchAllPokemons;
  },

  componentDidMount: function () {
    this.storeToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.storeToken.remove();
  },

  _onChange: function () {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },

  render: function() {
    var pokList = this.state.pokemons.map(function(pokemon){

      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;
    });

    return <ul>{pokList}</ul>;
  }
});

module.exports = PokemonsIndex;
