var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');

var PokemonIndexItem = React.createClass({
  render: function(){
    var pokemon = this.props.pokemon;

    return <li className="poke-list-item">{pokemon.name + " " + pokemon.poke_type}</li>;
  }
});

module.exports = PokemonIndexItem;
