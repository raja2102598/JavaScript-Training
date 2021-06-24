//REST OPERATOR 
//REST Operator comes at last
//REST creates a new array or a new object from the remaining elements
const names = { cat: 'Bob',dog: 'Fred',alligator: 'Benedict' }

const { cat,...otherAnimals } = names

console.log(cat) // Bob
console.log(otherAnimals) // {dog: 'Fred', alligator: 'Benedict'}