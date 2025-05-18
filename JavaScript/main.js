//console.log("HELLO");
//console.error("This is an error.");
//console.warn("This is an warning");

//variables var,let,const
let  age = 30;
age = 50;
console.log(age);

//Globally scopped
var myage  = 20;
console.log(myage);


const hisAge = 30;
// hisAge =3;    //reassigning the value in the const is not possible 
console.log(hisAge);


let  heraAge;


//data types 

const Name = 'SAM';
const THisage = 33;
const ratings = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z ;
console.log(typeof Name);
console.log(typeof THisage);
console.log(typeof ratings);
console.log(typeof isCool);
console.log(typeof y);
console.log(typeof z);


console.log('My name is ' +  Name  + ' and my age is ' + age )


console.log(`My name is ${Name} and age is ${age}`)

const hello = `Hello ${Name} is here!!!`;
console.log(hello) 