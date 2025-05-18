// //single selctor
// const form = document.getElementById('my-form');

// const namelabel = document.querySelector('h1');
// console.log(namelabel);


// //MultipleSelector

// console.log(document.querySelectorAll('.items'))
// console.log(document.getElementsByTagName('form'))


// const items = document.querySelectorAll('.item');


// items.forEach((item) => console.log(item));


//MANIPULATORS

const ul = document.querySelector('.items');
// ul.remove();
// ul.firstElementChild.remove();
// ul.firstElementChild.textContent = "HELLO FROM THE JS";

ul.children[2].innerHTML = "<H3> THIS IS SOMETHING </H3>";


const btn = document.querySelector('.btn');
btn.style.background = 'red';















