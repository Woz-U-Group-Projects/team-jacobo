console.log('App.js is running!');

var template = <div><h1>To-Do App </h1><p> Testing some info</p></div>; //fixed error by placing <div> tags
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);