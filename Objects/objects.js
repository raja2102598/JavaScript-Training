// var user={
//     name:'Rahul',
//     age:21,
//     place:'Madurai'
// };


// console.log("Creating user object",user);


// // retreving one by one
// console.log(user.name);
// console.log(user.age);
// console.log(user.place);

// // adding a property
// user.designation="SE";
// console.log(user);

// // delete a property
// delete user.age;

var employee={
    id:1,
    name:'Raja',
    email:'rr21@gmail.com'
}
console.log(employee);

// console.log(employee.email);

console.log(employee['email']);

employee['age']=21;

console.log(employee);

delete employee['age'];

console.log(employee);
