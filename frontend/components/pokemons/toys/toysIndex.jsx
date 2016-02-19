var React = require("react");
var apiUtil = require('../../../util/apiUtil.js');
var PokemonStore = require('../../../stores/pokemon.js');
var ToysIndexItem = require('./toysIndexItem');

var toysIndex = React.createClass({

  getInitialState: function(){
    return{
      pokemon: undefined
    };
  },

  componentWillMount: function(){
    this.setState({pokemon: PokemonStore.find(this.props.params.pokemonId)});
  },

  render: function(){
    return this.props.toys.map(function(toy){
      return <ToysIndexItem toy={toy} />;
    });
  }
});

module.exports = toysIndex;
