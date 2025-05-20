const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please provide the right value')
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(() => msg.remove(),1500);

    }else{
        // console.log('success');
        // msg.innerHTML = '<div style=background:violet>Done </div>';

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);


        //clearing the Values
        nameInput.value = '';
        emailInput.value = '';
        

    }
    
    
    

}




