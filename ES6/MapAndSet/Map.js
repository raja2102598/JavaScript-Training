//Eg: 1

var course = new Map([
    ["react",{ descrip: "UI" }],
    ["Jest",{ description: "Testing" }],
])

course.set([
    ["Vue",{ descrip: "UI" }],
    ["Jest",{ description: "Testing" }],
])

console.log("The Courses are",course)

//to get the values wrong way
//these cant be used i.e (.) notation
console.log(course.Jest) //undefined

// to get the values. Correct way
console.log(course.get("Jest"))


//Eg: 2 map with Parameters (With set())

//Passing an array inside map constructor
var details = new Map([
    ["Today",new Date()],
    ["item",[1,2,3]]
])

console.log(details.get("item"))

console.log(details.size) //2
details.forEach(function (item) {
    console.log(item)
})