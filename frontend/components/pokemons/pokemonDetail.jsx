var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');

var PokemonDetail = React.createClass({

  getInitialState: function(){
    return{
      pokemon: this.getStateFromStore()
    };
  },

  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(function(){
      this.setState({
        pokemon: this.getStateFromStore()
      });
    }.bind(this));
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchOnePokemon(newProps.params.pokemonId); // fetch pokemon
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  getStateFromStore: function(){
      return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  render: function(){
    var pokemon = this.state.pokemon;

    if(pokemon === undefined){
      return <div></div>;
    }

    return <div>
      <div className="pokemon-detail-pane">
        <div className="detail">
          <img src={pokemon.image_url} />
          <ul>
            <li>{pokemon.name}</li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <ul>Moves:
              {pokemon.moves.map(function(move){
                return <li>{move}</li>;
              })}
            </ul>
          </ul>
        </div>
      </div>
    </div>;
  }

});

module.exports = PokemonDetail;
