'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
var ChoiceApp = function (_React$Component) {
    _inherits(ChoiceApp, _React$Component);

    function ChoiceApp(props) {
        _classCallCheck(this, ChoiceApp);

        //binding occurs here
        var _this = _possibleConstructorReturn(this, (ChoiceApp.__proto__ || Object.getPrototypeOf(ChoiceApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this); //bind to the current instance
        _this.handlePick = _this.handlePick.bind(_this); // needs to call itself
        _this.handleAddOption = _this.handleAddOption.bind(_this); // passes it down to AddOption inside children
        _this.state = {
            options: ['Thing One', 'Thing two', 'Thing three']
        };
        return _this;
    }
    // define method handleDeleteOption pass downed as a prop in Options
    //parent 


    _createClass(ChoiceApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }

        // reveresed the data flow and allowed child to communicate with the parent by calling the method     
        //randomizer math aka secret sauce

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option]) // concat 
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

    }, {
        key: 'render',
        value: function render() {
            var title = 'Decides for You App';
            var subtitle = '!Randomizer at your will';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                ' ',
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption // call it down in the AddOption class 

                })
            );
        }
    }]);

    return ChoiceApp;
}(React.Component);

// building randomizer app using React components 


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// create a class called Action for the button effects that extends React.Component 


var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    'Tell me what to do!'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

//setup an options prop for Options component
//render the length of the array 

// Render a new p tag for each option (set text, set key)

// add Options -> Options components here
//add Remove All button
//setup a handleRemoveAll > alert with message
// setup onClick to fire the method 
//integrate bind


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

// Option -> Option component here


var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

// setup the form with text input and submit button 
// wire up onSubmit
// define method to wire up (handleAddOption > fetch the value typed > if value, then alert)

// add AddOptions > AddOption component here


var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    //set up constructor function
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            // this behavior shouldn't live in the parent, AddOption also built in the component when form gets submitted
            e.preventDefault();

            var option = e.target.elements.option.value.trim(); //data extracted here

            if (option) {
                this.props.handleAddOption(option); // pass data in with option from the parent, will be manipulated here, doesn't manipulate the state
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(ChoiceApp, null), document.getElementById('app'));

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
