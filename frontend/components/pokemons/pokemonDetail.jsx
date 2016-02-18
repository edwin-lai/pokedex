var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');

var PokemonDetail = React.createClass({

  getInitialState: function(){
    return{
      pokemon: this.getStateFromStore()
    };
  },

  getStateFromStore: function(){
      return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  render: function(){
    if(this.state.pokemon === undefined){
      return <div></div>;
    }
    return <div>
      <div className="pokemon-detail-pane">
        <div className="detail">
          {this.state.pokemon}
          <img src={this.state.pokemon.image_url} />
        </div>
      </div>
    </div>;
  }

});

module.exports = PokemonDetail;
