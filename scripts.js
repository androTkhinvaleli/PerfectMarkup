let menuDiv = document.querySelector('.alt-nav-block');
let menuIcon = document.querySelector('.menu-icon');
let burger = document.querySelector('#burger');
let counter = 0;
burger.addEventListener('click',()=>{
    menuDiv.classList.toggle('unhide-menu');
    menuIcon.classList.toggle('slide-burger');
    switch(counter){
        case 0: 
            burger.src = "./imgs/cancel-invert.png";
            counter = 1;
            break;
        case 1:
            burger.src = "./imgs/menu-invert.png";
            counter = 0;
            break;

    }
    
});