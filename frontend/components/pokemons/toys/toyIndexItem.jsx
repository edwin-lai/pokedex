var React = require('react');

var ToysIndexItem = React.createClass({

  showDetail: function() {
    this.history.push('/pokemon/' + this.props.pokemon.id + '/toys/' + this.props.toy.id);
  },

  render: function(){
    var toy = this.props.toy;
    return <li class="toys-list-item" onClick={this.showDetail}>
      <ul>
        <li>Name: {toy.name}</li>
        <li>Happiness: {toy.happiness}</li>
        <li>Price: {toy.price}</li>
      </ul>
    </li>;
  }

});

module.exports = ToysIndexItem;
