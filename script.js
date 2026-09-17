const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

const pieces = [
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" },
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" },
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" }
];

toggleButton.addEventListener('click',function(){
    nav.classList.toggle('open');
});

const gallery = document.querySelector('.gallery-grid');

if(gallery){
    pieces.forEach(function(piece){
        const div = document.createElement('div');
        div.classList.add('piece');
        div.innerHTML = `
            <div class = "piece-image">
                <img src = "${piece.image}" alt="${piece.description}">
            </div>
            <h3>${piece.name}</h3>
            <p>${piece.description}</p>
        `;
        gallery.appendChild(div);
    });
}

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

