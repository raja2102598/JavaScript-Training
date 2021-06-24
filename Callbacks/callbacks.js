// function notification(sms,email){
//     console.log("Process starts");
//     sms();
//     email();
// }

// notification(
//     function sms(){
//         alert('send sms');
//     },
//     function email(){
//         alert('send email');
//     }
// );

// console.log("process ends");



//Synchronous callback(executed Immediately)

function greeting(name) {
    alert("hello " + name)

}

function userInput(status) {
    var name = prompt("Enter name")
    status(name)
}

userInput(greeting);