function greet() {
    document.write('hello')
}

function elementCreation() {
    var element = document.createElement('h1')
    element.textContent = "Helloooo"
    document.body.appendChild(element)
    var button = document.getElementById('btn')
    button.style.display = "none"
}

// only once
// var element = document.createElement('h1')
// document.body.appendChild(element)
// function elementCreation() {
//     element.textContent = "Helloooo"
// }

function showData() {
    var ele = document.getElementById('show')
    console.log(ele.textContent)
}