//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
class ChoiceApp extends React.Component {
    constructor(props) {
        super(props);
        //binding occurs here
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); //bind to the current instance
        this.handlePick = this.handlePick.bind(this); // needs to call itself
        this.state = {
            options: ['Thing One', 'Thing two', 'Thing three']
        };
    }
    // define method handleDeleteOption pass downed as a prop in Options
    //parent 
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

// reveresed the data flow and allowed child to communicate with the parent by calling the method     
//randomizer math aka secret sauce
handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
}
// pass handlePick to Action and set up onClick
// randomly pick an option and alert user
    render () {
       const title = 'Decides for You App';
       const subtitle = '!Randomizer at your will';
       
        return (
            <div>
                <Header title={title} subtitle={subtitle} /> {/* add key value pairs */}
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
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
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                Tell me what to do!
                </button>
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
//integrate bind
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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