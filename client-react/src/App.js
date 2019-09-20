import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Action from './components/Action';
import Header from './components/Header';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
class ChoiceApp extends React.Component {
    constructor(props) {
        super(props);
        //binding occurs here
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); //bind to the current instance
        this.handlePick = this.handlePick.bind(this); // needs to call itself
        this.handleAddOption = this.handleAddOption.bind(this); // passes it down to AddOption inside children
        this.state = {
            options: [] //renders an empty list
        };
    }
    // define method handleDeleteOption pass downed as a prop in Options
    //parent 
    handleDeleteOptions() {
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


    handleAddOption(option) {
        // adding some conditional logic
        if (!option) { //will only run if there is an empty string
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }


        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option) // concat 
            };
        });
        // pass in updater function
        //console.log(option); //bind above before passing it down
    }
    // pass handlePick to Action and set up onClick
    // randomly pick an option and alert user
    // found a way to make child communicate with parent, props are usually 1 way street 
    // this was fixed by passing functions like handlePick and handleDeleteOptions down to the children
    // the children can then call those functions which allows to reverse data flow  
    render() {
        const title = 'Decides for You App';
        const subtitle = 'Cannot decide, decide for me please';

        return (
            <div>
                <Header title={title} subtitle={subtitle} /> {/* add key value pairs */}
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption} // call it down in the AddOption class 

                    />
                
                </div>
                
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />) //?
                }
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