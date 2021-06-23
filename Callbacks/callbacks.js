function notification(sms,email){
    console.log("Process starts");
    sms();
    email();
}

notification(
    function sms(){
        alert('send sms');
    },
    function email(){
        alert('send email');
    }
);

console.log("process ends");

