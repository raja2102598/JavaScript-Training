class Person {
    constructor(fname,lname,age) {
        this.fname = fname
        this.lname = lname
        this.age = age

    }

    getFullName() {
        return this.fname + ' ' + this.lname
    }
}


var person = new Person("Raja","J",21)

console.log(person)

document.writeln(person.fname)
document.writeln(person.lname)
document.writeln(person.age)

console.log(person.getFullName())