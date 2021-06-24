// const names = ['Bob', 'Fred', 'Benedict'];

// const [cat, dog, cow] = names;

// console.log(cat); // Bob
// console.log(dog); // Fred
// console.log(cow); // Benedict



//Skip Items and use place holders
// const namess = ['Bob', 'Fred', 'Benedict'];

// const [cat, , lion] = namess;

// console.log(cat); // Bob
// console.log(lion); // Benedict




// // //ADS with REST 
const name = ['Bob','Fred','Benedict']

const [cat,...rest] = name
console.log(cat) // Bob
console.log(rest) // ["Fred", "Benedict"]