// longhand ES 5
function sayHello(name) {
    console.log("hello",name)
}
sayHello(prompt('enter ur name'))

setTimeout(function () {
    console.log("Loading....")
},3000)


var list = ['social','science','maths','English']
list.forEach(function (item) {
    console.log(item)
})


// Arrow Function
sayHello = name => console.log("Hello",name)
sayHello(prompt('enter ur name'))


setTimeout(() => console.log("Loading...."),3000)


var list = ['social','science','maths','English']
list.forEach(item => console.log(item))