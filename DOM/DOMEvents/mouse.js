function addStyle() {
    const mouseele = document.getElementById('add')
    mouseele.className = 'addstyle'
}
function removeStyle() {
    const mouseout = document.getElementById('add')
    mouseout.className = "removestyle"
}


var btn = document.getElementById('one')
btn.onclick = function () {
    alert("Clicked")
}