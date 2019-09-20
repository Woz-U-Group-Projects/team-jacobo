import React from 'react';




// setup the form with text input and submit button 
// wire up onSubmit
// define method to wire up (handleAddOption > fetch the value typed > if value, then alert)

// add AddOptions > AddOption component here
export default class AddOption extends React.Component {
    //set up constructor function
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) { // this behavior shouldn't live in the parent, AddOption also built in the component when form gets submitted
        e.preventDefault();
        // possible error 
        const option = e.target.elements.option.value.trim(); //data extracted here
        const error = this.props.handleAddOption(option);
        // add component state

        this.setState(() => {
            return { error };
        });
    }
    // end of possible error

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>

        );
    }
}
