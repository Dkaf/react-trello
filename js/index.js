require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');

const Board = require('./components/board');
const ListContainer = require('./components/list_container');
const Card = require('./components/card');



let boardOne = <Board title="board one" />;

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(boardOne, document.getElementById('app'));
});
