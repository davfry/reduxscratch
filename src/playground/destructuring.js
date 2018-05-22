// const person = {
//   name: 'Dave',
//   age: 29,
//   location: {
//     city: 'Salt Lake City',
//     temp: 69
//   }
// };
//
// const {name = 'Anonymous', age} = person;
//
// console.log(`${name} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }
//
// const book = {
//   title: 'Little Prince',
//   author: 'French Guy',
//   publisher: {
//     name: 'Random House'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


const address = [
  '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'
];
const [street, city, state = 'New York', zip] = address;
console.log(`You are in ${city}, ${state}.`);
const item = [
  'coffee', '$2', '$2.50', '$2.75'
];
const [menuItem, , medium] = item;
console.log(`A medium ${menuItem} costs ${medium}.`);
