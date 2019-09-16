'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'To-Do App '
  ),
  React.createElement(
    'p',
    null,
    ' Testing some info'
  )
); //fixed error by placing <div> tags
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
