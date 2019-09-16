console.log('App.js is running!');


const todoApp = {
    title: 'To do App!',
    subtitle: 'Your to do stuff!',
    options: []
};

//set up onFormSubmit arrow function
const onFormSubmit = (e) => {
 e.preventDefault();

 const option = e.target.elements.option.value;   // points to the element that the event started on

 if (option) { //reference this string
     todoApp.options.push(option); //push to array 
     e.target.elements.option.value = '';
 }
};


const template = (
    <div>
        <h1>{todoApp.title} </h1>
        {todoApp.subtitle && <p>{todoApp.subtitle}</p>}
        <p>{todoApp.options.length > 0 ? 'Sample Text' : 'None'}</p>
        <p>{todoApp.options.length}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>       
        <input type="text" name="option"/>
        <button>Add Options</button>
        </form>
    </div> //fixed error by placing <div> tags
); //cleaned up for easier to read with indentations

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);