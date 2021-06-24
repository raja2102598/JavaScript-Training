// function without the Arguments
// function myNumbers(values) {
// console.log(values);
// }
// myNumbers();


// function with the default parameters
// function myNumbers(values = 1000) {
// console.log("the value is", values);
// }
// myNumbers();
// myNumbers(undefined);
// myNumbers(200);


// Ex 2: 
function createShapes(
    height = '100px',
    width = '100px',
    border = 'solid 1px blue'
) {

    let element = document.createElement('div')
    element.style.height = height
    element.style.width = width
    element.style.border = border

    document.getElementsByTagName('body')[0].appendChild(element)
    return element

}

createShapes(undefined,'200px','solid 2px red')