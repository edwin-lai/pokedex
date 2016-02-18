var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');
var PokemonDetail = require('./components/pokemons/pokemonDetail.jsx');
// window.apiUtil = require('./util/apiUtil.js');
// window.PokemonStore = require('./stores/pokemon.js');

var App = require('./components/App');

var routes = (
  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemon/:pokemonId" />
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  var content = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
