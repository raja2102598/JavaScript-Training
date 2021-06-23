var orderedListElement=document.createElement('ol');
orderedListElement.textContent="Technologies";

var elementOne=document.createElement('li');
elementOne.textContent="React JS";

var elementTwo=document.createElement('li');
elementTwo.textContent="Node JS";

var elementThree=document.createElement('li');
elementThree.textContent="Flutter";

orderedListElement.appendChild(elementOne);
orderedListElement.appendChild(elementTwo);
orderedListElement.appendChild(elementThree);

document.body.appendChild(orderedListElement);