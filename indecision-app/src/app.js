console.log('App.js is running');

var indecision = {
    title: 'Indecision App',
    subtitle: 'This is the content.'
};

var template = (
    <div>
        <h1>{indecision.title}</h1>
        <p>{indecision.subtitle}</p>
    </div>
);

var user = {
    name: 'Cristinel',
    age: 31,
    location: 'Brasov'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);