var React = require("react");
var PokemonStore = require("../../../stores/pokemon.js");
var ApiUtil = require('../../../util/apiUtil.js');

var ToyDetail = React.createClass({

  getStateFromStore: function(){
    var mon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    debugger;
    this.setState({
      pokemon: mon,
      toy: mon.toys.find(function(toy){
        return toy.id === parseInt(this.props.params.toyId);
      }.bind(this))
    });
  },

  _onChange: function(){

  },

  getInitialState: function(){
    var mon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    return{
      pokemon: mon,
      toy: undefined
    };
  },

  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(this.getStateFromStore);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchOnePokemon(newProps.params.pokemonId); // fetch pokemon
  },

  render: function(){
    if (this.state.toy === undefined) {
      return <div></div>;
    }
    debugger;
    var toy = this.state.toy;
    return <div><ul>
      <li>Name: {toy.name}</li>
      <li>Happiness: {toy.happiness}</li>
      <li>Price: {toy.price}</li>
    </ul></div>;
  }
});

module.exports = ToyDetail;
