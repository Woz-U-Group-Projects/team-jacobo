'use strict';

console.log('App.js is running!'); //checking to see if working in console under development tools in chrome


var template = React.createElement(
  'h1',
  null,
  'To-Do App '
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
