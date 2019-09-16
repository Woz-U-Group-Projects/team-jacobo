console.log('App.js is running!');

var template = ( 
    <div>
        <h1>To-Do App </h1>
        <p> Testing some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> //fixed error by placing <div> tags
); //cleaned up for easier to read with indentations

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);