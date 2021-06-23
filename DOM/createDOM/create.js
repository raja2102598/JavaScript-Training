var ulElement = document.createElement('ul')
ulElement.textContent = "Technologies"

var liElement1 = document.createElement('li')
liElement1.textContent = "React"


var liElement2 = document.createElement('li')
liElement2.textContent = "Vue"


var liElement3 = document.createElement('li')
liElement3.textContent = "Angular"


ulElement.appendChild(liElement1)
ulElement.appendChild(liElement2)
ulElement.appendChild(liElement3)


document.body.appendChild(ulElement)


// var arr=[1,2,3,4,5,6];

// arr.forEach(function (value,index){

// });

// creating multiple button elements
var arr = ['login','Reset','Register','Submit','cancel','sign Up','sign In']

function Buttons() {
    for (var i = 0;i < arr.length;i++) {
        var allbuttons = document.createElement('button')
        allbuttons.textContent = arr[i]
        document.body.appendChild(allbuttons)
    }
}

Buttons()