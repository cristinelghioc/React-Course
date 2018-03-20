'use strict';

console.log('App.js is running');

var indecision = {
    title: 'Indecision App',
    subtitle: 'This is the content.'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        indecision.title
    ),
    React.createElement(
        'p',
        null,
        indecision.subtitle
    )
);

var user = {
    name: 'Cristinel',
    age: 31,
    location: 'Brasov'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
