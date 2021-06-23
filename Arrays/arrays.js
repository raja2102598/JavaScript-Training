var arr=['javascript','react','nodejs'];

// all elements
// console.log(arr);

// to retrive
// console.log(arr[2]);

// console.log(arr.length);

arr[2]="expressjs";
// console.log(arr);

arr[3]="Mongo DB";
// console.log(arr);

// console.log(arr.toString());

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var i
for (i = 0; i < arr.length; i++) {
//   console.log(arr[i])
}

var array = [
  "Raja",
  [26, 05, 2000],
  {
    company: "onebill",
    age: 21,
  },
]

//First Element of Array
console.log(array[0])

//Second element is a Array
console.log(array[1][0])
console.log(array[1][1])

//Dot Notation
console.log("Using Dot Notation  - ", array[2].company)

//Key Notation
console.log("Using Key Notation  - ", array[2]["age"])
