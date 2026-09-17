const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click',function(){
    nav.classList.toggle('open');
});

const galleryImages = document.querySelectorAll('.piece img')

const lightbox  = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

galleryImages.forEach(function(image){
    image.addEventListener('click', function(){
        lightboxImg.src = image.src;
        lightbox.classList.add('open');
    });
});

lightbox.addEventListener('click', function(){
    lightbox.classList.remove('open');
});