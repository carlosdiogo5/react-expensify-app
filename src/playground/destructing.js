// const person = {
//   name: 'Carlos',
//   age: 26,
//   location: {
//     city: 'Coimbra',
//     temp: 28
//   }
// };

// //const name = person.name;
// //const age = person.age;

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature}º degrees in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

// Array destructuring

const address = ['1200 Travessa Nova', 'Montes Claros', 'Coimbra', '300012'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '2.00$', '2.50$', '2.75$'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}.`);
