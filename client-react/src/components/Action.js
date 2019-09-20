import React from 'react';

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

export default Action;