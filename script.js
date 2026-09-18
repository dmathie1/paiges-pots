const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

const pieces = [
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" },
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" },
    { name: "Skeleton Mug", description: "Hand-painted, unfired", image: "images/Skel-mug.jpeg" },
    { name: "Placeholder", description: "ADD DESCRIPTION", image: "images/Placeholder.jpg" }

];

toggleButton.addEventListener('click',function(){
    nav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});

const closeButton = document.querySelector('.nav-close');

closeButton.addEventListener('click', function() {
    nav.classList.remove('open');
    document.body.classList.toggle('no-scroll');
});

const gallery = document.querySelector('.gallery-grid');

if(gallery){
    pieces.forEach(function(piece){
        const div = document.createElement('div');
        div.classList.add('piece');
        div.innerHTML = `
            <div class = "piece-image">
                <img src = "${piece.image}" alt="${piece.description}">
                <h3 class = "piece-title"> ${piece.name}</h3>
            </div>
        `;
        gallery.appendChild(div);
    });
}

const galleryImages = document.querySelectorAll('.piece img')

let currentIndex = 0;

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxDescription = document.querySelector('.lightbox-description');

function showPiece(index) {
    const piece = pieces[index];
    lightboxImage.src = piece.image;
    lightboxImage.alt = piece.description;
    lightboxTitle.textContent = piece.name;
    lightboxDescription.textContent = piece.description;
    currentIndex = index;
}

if (gallery) {
    const pieceElements = document.querySelectorAll('.piece-image');

    pieceElements.forEach(function(el, index) {
        el.addEventListener('click', function() {
            showPiece(index);
            lightbox.classList.add('open');
        });
    });
}

document.querySelector('.lightbox-close').addEventListener('click', function() {
    lightbox.classList.remove('open');
});

document.querySelector('.lightbox-prev').addEventListener('click', function() {
    const newIndex = (currentIndex - 1 + pieces.length) % pieces.length;
    showPiece(newIndex);
});

document.querySelector('.lightbox-next').addEventListener('click', function() {
    const newIndex = (currentIndex + 1) % pieces.length;
    showPiece(newIndex);
});

const banner = document.querySelector('.banner');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});