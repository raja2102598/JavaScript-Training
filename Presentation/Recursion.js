//Recursion.js

function Numbers(value) {
  console.log(value--)

  //Recursion
  if (value > 0) {
    Numbers(value)
  }
}
//Calling the Recursive Function
Numbers(10)
