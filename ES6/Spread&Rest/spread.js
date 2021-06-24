// // Spread Operator with Array
// const setOne = ["aa", "bb", "cc"];
// const setTwo = ['one', 'two', 'three'];
// const allSets = [...setOne, ...setTwo];
// console.log(allSets);


// // Spread Operator with objects
// const person = {
// name: 'John',
// age: 27,
// place: 'England'
// };

// // creating the copy of the object
// const copyPerson = { ...person };

// person.name = 'Charlie';
// console.log("The person List is", person);
// console.log("the copy of the person", copyPerson);


const teacher = {
    name: 'Reena',
    age: 30,
    color: 'Dusky brown',
    subject: ["Social","English"]
}

const address = {
    city: 'Blore',
    pincode: 654321,
    landmark: 'JP Nagar'
}

const teacherDetails = { ...teacher,...address }
console.log(teacherDetails)

const teacherDetailsWithPhoneNo = {
    ...teacher,
    phone: 123456789,
    married: false,
    getName: function () {
        return this.name
    }
}

console.log(teacherDetailsWithPhoneNo)