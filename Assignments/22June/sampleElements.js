var tableElement = document.createElement("table")

//Creating Table Head

var trElement1 = document.createElement("tr")

var thElement1 = document.createElement("th")
var thElement2 = document.createElement("th")
var thElement3 = document.createElement("th")

thElement1.textContent = "Name"
thElement2.textContent = "Email"
thElement3.textContent = "Age"

trElement1.appendChild(thElement1)
trElement1.appendChild(thElement2)
trElement1.appendChild(thElement3)

tableElement.appendChild(trElement1)

//Creating Table Rows
//Row 1
var trElement2 = document.createElement("tr")

var tdElement1 = document.createElement("td")
var tdElement2 = document.createElement("td")
var tdElement3 = document.createElement("td")

tdElement1.textContent = "Raja"
tdElement2.textContent = "Raja@gmail.com"
tdElement3.textContent = "21"

trElement2.appendChild(tdElement1)
trElement2.appendChild(tdElement2)
trElement2.appendChild(tdElement3)

tableElement.appendChild(trElement2)

//Row 2

var trElement3 = document.createElement("tr")

var tdElement4 = document.createElement("td")
var tdElement5 = document.createElement("td")
var tdElement6 = document.createElement("td")

tdElement4.textContent = "Arun"
tdElement5.textContent = "Arun@gmail.com"
tdElement6.textContent = "21"

trElement3.appendChild(tdElement4)
trElement3.appendChild(tdElement5)
trElement3.appendChild(tdElement6)

tableElement.appendChild(trElement3)

tableElement.style.width = "100%"
document.body.appendChild(tableElement)
