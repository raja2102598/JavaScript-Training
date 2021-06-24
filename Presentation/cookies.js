localStorage.setItem('Name','Vighna') //Once set we can comment & it is still accessible.
console.log('From Local Storage - ',localStorage.getItem('Name'))
localStorage.removeItem('Name')

sessionStorage.setItem('LName','Rajan')
console.log('From Session Storage - ',sessionStorage.getItem('LName'))


//Initiating a new session key
sessionStorage.setItem('newSession',true)

//Local Storage Visit count
var visits = Number(localStorage.getItem('visitCount'))
var current = Boolean(sessionStorage.getItem('newSession'))

if (current) {
    visits++
}

localStorage.setItem('visitCount',visits)


//Session Visit count
var sessionvisits = Number(sessionStorage.getItem('visitCount'))

if (current) {
    sessionvisits++
}

sessionStorage.setItem('visitCount',sessionvisits)

//Cookies
document.cookie = "myName=Vighna Rajan"
console.log(document.cookie)