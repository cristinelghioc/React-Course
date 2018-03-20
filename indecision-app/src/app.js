console.log('App.js is running');

var indecision = {
    title: 'Indecision App',
    subtitle: 'This is the content.',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{indecision.title}</h1>
        {indecision.subtitle && <p>{indecision.subtitle}</p>}
        <p>{indecision.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item</li>
            <li>Item</li>
        </ol>
    </div>
);

var user = {
    name: 'Cristinel',
    age: 31,
    location: 'Berlin'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);