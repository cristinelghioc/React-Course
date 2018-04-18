// const person = {
//     name: 'Cristinel',
//     age: '31',
//     location: {
//         city: 'Brasov',
//         temp: 14
//     }
// };

// const {name = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${name} is ${age} and he is from ${city}.`);

// console.log(`It's ${temperature} degrees in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['Graurului 15', 'Brasov', 'Romania', '465555'];

const [, city, country,] = address;

console.log(`You are in ${city} ${country}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}.`);