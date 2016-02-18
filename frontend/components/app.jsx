var React = require('react');
//var Pokedex = require('pokedex');
var PokemonsIndex = require('./pokemons/pokemonsIndex.jsx');

var App = React.createClass({
  render: function () {
    return <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex/>
        </div>
        {this.props.children}
      </div>;
  }
});

module.exports = App;
