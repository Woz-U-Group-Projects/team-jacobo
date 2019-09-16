'use strict';

console.log('App.js is running!');

var todoApp = {
    title: 'To do App!',
    subtitle: 'Your to do stuff!',
    options: []
};

//set up onFormSubmit arrow function
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value; // points to the element that the event started on

    if (option) {
        //reference this string
        todoApp.options.push(option); //push to array 
        e.target.elements.option.value = '';
    }
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
    todoApp.subtitle && React.createElement(
        'p',
        null,
        todoApp.subtitle
    ),
    React.createElement(
        'p',
        null,
        todoApp.options.length > 0 ? 'Sample Text' : 'None'
    ),
    React.createElement(
        'p',
        null,
        todoApp.options.length
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Options'
        )
    )
) //fixed error by placing <div> tags
; //cleaned up for easier to read with indentations

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
