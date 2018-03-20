'use strict';

console.log('App.js is running');

var indecision = {
    title: 'Indecision App',
    subtitle: 'This is the content.',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        indecision.title
    ),
    indecision.subtitle && React.createElement(
        'p',
        null,
        indecision.subtitle
    ),
    React.createElement(
        'p',
        null,
        indecision.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item'
        ),
        React.createElement(
            'li',
            null,
            'Item'
        )
    ),
    React.createElement(
        'p',
        null,
        'Test'
    )
);

var user = {
    name: 'Cristinel',
    age: 31,
    location: 'Berlin'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
