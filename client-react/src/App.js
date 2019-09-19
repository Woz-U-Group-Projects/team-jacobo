//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
class ChoiceApp extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <h1>Make me decide</h1>
                <h2>Randomizer at your will</h2>
        
            </div>

        );
    }
}

// create a class called Action for the button effects that extends React.Component 
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>Tell me what to do!</button>
            </div>
        );
    }
}

// add Options -> Options components here
class Options extends React.Component {
    render() {
        return (
        <div>
            Options component here
        </div>
        );
    }   
}

// add AddOptions > AddOption component here
class AddOption extends React.Component {
    render () {
        return (
            <div>
                AddOptions component here
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

