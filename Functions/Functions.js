// // Anonmyous --> function expression or IIF
// // function() {
// // console.log("Hii Welcome!!");
// // }

// // function expression
// var test = function () {
//     console.log("Hii Welcome!!");
//    }
//    test();

//    // Naming Function ---> IIF
//    // function sample() {
//    // alert("Hello im Naming Functions")
//    // }
//    // sample();

//    // IIF
//    (function Demo() {
//     console.log('Im a IIF function');
//    })();

//    (function () {
//     console.log('Im a IIF Anonomyous function');
//    })();

//    // Function with parameters
//    function Add(a, b) {
//     return a + b;
//    }

//    var result = Add(10, 20);
//    console.log('Result is', result);

//    function Greeting(from, message) {
//     document.write(from + ' : ' + message);
//    }
//    Greeting("Annie", "Welcome to Sessions");

// function checkAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return confirm("Do you have permission from your parents?");
//     }
// }

// var age=prompt('how old are you?');
// if(checkAge(age)){
//     alert("Access Granted");
// }
// else{
//     alert("Access Denied");
// }

function test1() {
  var a = 10
  var b = 20
  return a * b
}

var Result = test1()

console.log(Result)
function test(a, b) {
  return a * b
}
var Result = test(10, 25)

console.log(Result)

var func = (function () {
  console.log("hello")
});

//IIF
(function () {
  console.log("hi......");
})();
