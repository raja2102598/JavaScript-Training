// setInterval(function(){
//     var date=new Date().toLocaleTimeString();

// }, interval);

setTimeout(function () {
    var date = new Date().toLocaleTimeString();
    var myDate = document.getElementById('demo');
    myDate.innerHTML = date;
   }, 3000);
   
   
   
   setInterval(function () {
    var date = new Date().toLocaleTimeString();
    var myDate = document.getElementById('demo1');
    myDate.innerHTML = date;
   }, 1000);