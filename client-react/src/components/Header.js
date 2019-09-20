import React from 'react';

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

export default Header;