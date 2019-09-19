'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//move rendering from const jsx into decisionApp class, nesting Header, Action, Options and AddOptions
var ChoiceApp = function (_React$Component) {
    _inherits(ChoiceApp, _React$Component);

    function ChoiceApp() {
        _classCallCheck(this, ChoiceApp);

        return _possibleConstructorReturn(this, (ChoiceApp.__proto__ || Object.getPrototypeOf(ChoiceApp)).apply(this, arguments));
    }

    _createClass(ChoiceApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, null),
                React.createElement(Options, null),
                React.createElement(AddOption, null)
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
                    'Make me decide'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Randomizer at your will'
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
                    null,
                    'Tell me what to do!'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// add Options -> Options components here


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
                'Options component here'
            );
        }
    }]);

    return Options;
}(React.Component);

// add AddOptions > AddOption component here


var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'AddOptions component here'
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
