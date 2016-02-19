var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var History = require('react-router').History;
var ApiUtil = require('../../util/apiUtil.js');

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/pokemon/' + this.props.pokemon.id);
  },

  render: function(){
    var pokemon = this.props.pokemon;

    return <li className="poke-list-item" onClick={this.showDetail}>
      {pokemon.name + " " + pokemon.poke_type}
    </li>;
  }
});

module.exports = PokemonIndexItem;
