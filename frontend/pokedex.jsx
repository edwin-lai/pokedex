var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
window.apiUtil = require('./util/apiUtil.js');
// window.PokemonStore = require('./stores/pokemon.js');

// var App = require('./component/App');

var routes = (
  <Route />
);

document.addEventListener('DOMContentLoaded', function(){
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
