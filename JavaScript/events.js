const btn = document.querySelector('.btn');
btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    // btn.style.background="red";
     document.querySelector('#my-form').style.background = 'red';
    console.log("Clicked");

    // document.querySelector("body").classList.add('bg-dark');

    document.querySelector('.items').innerHTML = "<h1>BUTTON CLICKED</h1>";
}); 

