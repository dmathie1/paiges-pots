const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click',function(){
    nav.classList.toggle('open');
});