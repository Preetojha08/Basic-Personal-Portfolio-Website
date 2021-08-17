let menu = document.querySelector('#menu_icon'); 
let nav_bar = document.querySelector('.nav_bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav_bar.classList.toggle('active');
}