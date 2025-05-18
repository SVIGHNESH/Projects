// function person(firstName, lastName, DOB, age) {
//     this.firstName = firstName;
//     this.DOB = new Date(DOB);
//     this.lastName = lastName;
//     this.age = age;
    
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// // person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

class Person {
    constructor(firstName, lastName, DOB, age) {
        this.firstName = firstName;
        this.DOB = new Date(DOB);
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getAge(){
        return this.age;
    }
}

const person1 = new Person("Vighnesh", "Shukla", "12-3-2006", 45);
//console.log(person1.DOB.getDate());
console.log(person1.getFullName());
console.log(person1.getAge());
