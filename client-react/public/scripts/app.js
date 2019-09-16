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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
) //fixed error by placing <div> tags
; //cleaned up for easier to read with indentations

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
