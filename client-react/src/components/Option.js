import React from 'react';

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

export default Option;