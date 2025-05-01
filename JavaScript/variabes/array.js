// let numbers = new Array(6);
// console.log(numbers)
//
//
// const fruits = ['Apple','Banana','Cherry'];
// fruits.push('Mango'); //adds the mango at the end of the array
// fruits.unshift('Pear'); //add the Pear at the index 0
// fruits.pop();
//
// console.log(fruits); 
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('Apple'));
// console.console.log()


person = {
  firstName : "Harish",
  lastName :'Chandra',
  age : 39,
  experience : ['RDR2','GTA5'],
  address :{
    country : 'India',
    state: 'Uttar Pradesh',
    district : 'Lucknow'
  }

}


const todos = [
  {
    id:1,
    text :'Make the List of the TODO',
    iscompleted :true,

  },
  {
    id:2,
    text :'Make the PIZZA',
    iscompleted :true,
    
  },
  {
    id:3,
    text :'Eat the PIZZA',
    iscompleted :false,
    
  }
];

const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// console.log(todos)
// console.log(todos[1].id);
 

person.email = 'Harish@gmail.com';
// console.log(person.email)
// alert(person);
// console.log(person.lastName);
// console.log(person.address);
// console.log(person.experience[1]);
// console.log(person.address.country);
// const {firstName,lastName,address :{state} } = person;
// console.log(firstName);
// console.log(state);


//loops

//for loops
// for(let i = 0 ; i<=10;i++){
//   console.log(`this is the just for trial ${i}`);

// }
// let i  = 1;
// //while loop
// while(i < 11 ){
//   console.log(`While loop number:${i}`);
//   i++;
   
// }
//  for(let i = 0;i< todos.length;i++){
//     console.log(todos[i].iscompleted);
//  }


// for(let i of todos){
//   console.log(i.text); 
// }

//foreach,map,filter

// todos.forEach(function(todo){
//   console.log(todo.text);

// });


// const todotext = todos.map(function(todo){
//   return todo.text;
// }
// );

// console.log(todotext); 


const todoCompleted = todos.filter(function(todo){
  return todo.iscompleted === true;
}).map(function(todo){
  return todo.text;
});

console.log(todoCompleted);

