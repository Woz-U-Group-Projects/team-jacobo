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

//code not compiling