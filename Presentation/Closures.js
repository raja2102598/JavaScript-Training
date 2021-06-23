function sampleClosure() {
  var numberOne = 21
  var numberTwo = 44
  function addNumbers() {
    var sum
    console.log("Number 1:  ", numberOne)
    console.log("Number 2:  ", numberTwo)
    sum = numberOne + numberTwo
    console.log("Sum of the numbers (addNumbers): ", sum)
  }
  addNumbers()
  console.log("Sum of the numbers (sampleClosure) : ", sum)
}

sampleClosure()
