require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');
var List = require('./components/list');
var Card = require('./components/card');

var cardOne = <Card text="test card one" />;
var cardTwo = <Card text="test card two" />;
var cardThree = <Card text="test card three" />;
var cardFour = <Card text="test card four" />;

var listOne = <List title="list one" cards= {[cardOne, cardTwo]} />;
var listTwo = <List title="list two" cards= {[cardThree, cardFour]} />;

var boardOne = <Board title="board one" lists= {[listOne, listTwo]}/>;

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(boardOne, document.getElementById('app'));
});
