console.log('App.js is running!');


var todoApp = {
    title: 'To do App!',
    subtitle: 'Your to do stuff!',
};

var template = ( 
    <div>
        <h1>{todoApp.title} </h1>
        <p>{todoApp.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> //fixed error by placing <div> tags
); //cleaned up for easier to read with indentations



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);