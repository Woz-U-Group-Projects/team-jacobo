//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
class ChoiceApp extends React.Component {
    render () {
       const title = 'ChoiceApp';
       const subtitle = '!Randomizer at your will';
       const options = ['Thing One', 'Thing two', 'thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} /> {/* add key value pairs */}
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}



// building randomizer app using React components 
class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
        
            </div>

        );
    }
}

// create a class called Action for the button effects that extends React.Component 
class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Tell me what to do!</button>
            </div>
        );
    }
}

//setup an options prop for Options component
//render the length of the array 

// Render a new p tag for each option (set text, set key)

// add Options -> Options components here
//add Remove All button
//setup a handleRemoveAll > alert with message
// setup onClick to fire the method 

class Options extends React.Component {
    handleRemoveAll(){  // set up event handler method 
        alert('handleRemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }   
}

// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            
            </div>
        );
    }
}

// setup the form with text input and submit button 
// wire up onSubmit
// define method to wire up (handleAddOption > fetch the value typed > if value, then alert)

// add AddOptions > AddOption component here
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>

        );
    }
}


//add another component named jsx to render HTML from Header and Action classes
//disable 
/*
const jsx = (
    <div>
        <Header /> render header class here
        <Action /> render action class here
        <Options /> render new Options class here 
    </div>
);
*/ 


// forgot to add ReactDOM
//renders ChoiceApp
ReactDOM.render(<ChoiceApp />, document.getElementById('app'));

// Notes:
// Run Babel in terminal:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// Run live-server app instead of npm start everytime:
// live-server public

// git branch
// git fetch
// git checkout addOptions/dev
// git status
// git add .
// git commit -m "type anything"
// git push -u origin *addOptions or dev* 