'use strict';

console.log('App.js is running!');

var todoApp = {
    title: 'To do App!',
    subtitle: 'Your to do stuff!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        todoApp.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        todoApp.subtitle
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
