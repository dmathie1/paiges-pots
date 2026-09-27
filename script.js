const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Each entry is one gallery piece. "images" holds every photo of that piece,
// in the order they should scroll through in the lightbox. The first image
// in the array is the one shown in the gallery grid.
const pieces = [
    {
        name: "Ace of Spades",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Ace.jpeg", "images/Ace2.jpeg"],
        sold: true
    },
    {
        name: "A Winning Hand",
        description: "Ceramic playing cards fanned out in hand \u2014 Queen of Hearts, Joker and Ace of Spades.",
        images: ["images/AllCard.jpeg"],
        sold: true
    },
    {
        name: "Gothic Cathedral",
        description: "Hand-built and hand-painted blue and white ceramic sculpture.",
        images: [
            "images/Building1.jpeg", "images/Building2.jpeg", "images/Building3.jpeg",
            "images/Building4.jpeg", "images/Building5.jpeg", "images/Building6.jpeg",
            "images/Building7.jpeg"
        ]
    },
    {
        name: "Cigarette Box",
        description: "Ceramic sculpture with hand-painted illustrations and warning labels.",
        images: [
            "images/CigBox.jpeg", "images/CigBox2.jpeg", "images/CigBox3.jpeg",
            "images/CigBox4.jpeg", "images/CigBox5.jpeg", "images/CigBox6.jpeg",
            "images/CigBox7.jpeg"
        ],
        sold: true
    },
    {
        name: "Hand Holding a Cigarette",
        description: "Ceramic sculpture.",
        images: ["images/CigHand.jpeg", "images/CigHand2.jpeg", "images/CigHand3.jpeg"]
    },
    {
        name: "Cowboy Cup",
        description: "Hand-painted desert cowboy scene cup.",
        images: [
            "images/CowboyCup.jpeg", "images/CowboyCup2.jpeg", "images/CowboyCup3.jpeg",
            "images/CowboyCup4.jpeg", "images/CowboyCup5.jpeg", "images/CowboyCup6.jpeg"
        ],
        sold: true
    },
    {
        name: "Joker",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Joker.jpeg", "images/Joker2.jpeg"],
        sold: true
    },
    {
        name: "Playing Cards Box",
        description: "Ceramic sculpture of a deck of playing cards.",
        images: [
            "images/PCardB1.jpeg", "images/PCardB2.jpeg", "images/PCardB3.jpeg",
            "images/PCardB4.jpeg", "images/PCardB5.jpeg", "images/PCardB6.jpeg",
            "images/PCardB7.jpeg", "images/PCardB8.jpeg", "images/PCardB9.jpeg",
            "images/PCardB10.jpeg", "images/PCardB11.jpeg"
        ]
    },
    {
        name: "Queen of Hearts",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Queen2.jpeg", "images/Queen.jpeg", "images/QueenAce.jpeg"]
    },
    {
        name: "Tarot Cards Box",
        description: "Ceramic sculpture of a tarot card box.",
        images: [
            "images/TBox.jpeg", "images/TBox2.jpeg", "images/TBox3.jpeg",
            "images/TBox4.jpeg", "images/TBox5.jpeg", "images/TBox6.jpeg"
        ]
    },
    {
        name: "Better Luck Next Time",
        description: "Hand-painted ceramic cup with an archer design and lettering.",
        images: [
            "images/Archer1.jpeg", "images/Archer2.jpeg", "images/Archer3.jpeg", "images/Archer4.jpeg"
        ]
    },
    {
        name: "Sleepy Horse Cup",
        description: "Hand-painted ceramic cup with a horse illustration and a green-glazed interior.",
        images: ["images/Horse1.jpeg", "images/Horse2.jpeg", "images/Horse3.jpeg"]
    },
    {
        name: "Jousting Knights",
        description: "Hand-painted ceramic dish with a jousting knights design and chain-link border.",
        images: ["images/Knight1.jpeg", "images/Kinght2.jpeg"]
    },
    {
        name: "Lucha Libre Cup",
        description: "Hand-painted ceramic cup with a luchador design.",
        images: [
            "images/Luch1.jpeg", "images/Luch2.jpeg", "images/Luch3.jpeg",
            "images/Luch4.jpeg", "images/Luch5.jpeg"
        ]
    },
    {
        name: "Two for Joy",
        description: "Hand-painted ceramic cup with a magpie illustration and lettering.",
        images: [
            "images/Magpie1.jpeg", "images/Magpie2.jpeg", "images/Magpie3.jpeg", "images/Magpie4.jpeg"
        ],
        sold: true
    },
    {
        name: "Wakey Wakey",
        description: "Hand-painted ceramic cup with a star motif and lettering, blue-glazed interior.",
        images: ["images/Wake1.jpeg", "images/Wake2.jpeg", "images/Wake3.jpeg"],
        sold: true
    },
    {
        name: "Dancing Skeletons Mug",
        description: "Hand-painted ceramic mug with a star-shaped handle and a dancing skeletons illustration.",
        images: ["images/Skel1.jpeg", "images/Skel2.jpeg", "images/Skel3.jpeg"],
        sold: true
    }
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

const heroTrack = document.querySelector('.hero-scroll-track');

if (heroTrack) {
    const heroImages = pieces.map(function(piece) {
        return piece.images[0];
    });
    // Duplicate the set once so the looping animation can travel exactly
    // -50% and land back on an identical frame, with no visible seam.
    heroImages.concat(heroImages).forEach(function(src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        heroTrack.appendChild(img);
    });
}

if(gallery){
    pieces.forEach(function(piece, pieceIndex){
        const div = document.createElement('div');
        div.classList.add('piece');
        const soldMarkup = piece.sold
            ? '<span class="sold-badge">Sold</span>'
            : '';
        div.innerHTML = `
            <div class = "piece-image" data-piece-index="${pieceIndex}">
                <img src = "${piece.images[0]}" alt="${piece.name}">
                <h3 class = "piece-title"> ${piece.name}</h3>
                ${soldMarkup}
            </div>
            <p class="piece-caption">${piece.name}</p>
        `;
        gallery.appendChild(div);
    });
}

// currentPieceIndex tracks which sculpture is open; currentImageIndex tracks
// which of that sculpture's photos is showing, so prev/next only scroll
// through the images belonging to the same piece.
let currentPieceIndex = 0;
let currentImageIndex = 0;

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxDescription = document.querySelector('.lightbox-description');
const lightboxThumbs = document.querySelector('.lightbox-thumbs');

function buildThumbs(piece) {
    lightboxThumbs.innerHTML = '';
    piece.images.forEach(function(src, index) {
        const thumb = document.createElement('img');
        thumb.classList.add('lightbox-thumb');
        thumb.src = src;
        thumb.alt = piece.name + ' thumbnail ' + (index + 1);
        thumb.addEventListener('click', function() {
            showImage(currentPieceIndex, index);
        });
        lightboxThumbs.appendChild(thumb);
    });
}

function updateActiveThumb() {
    const thumbs = lightboxThumbs.querySelectorAll('.lightbox-thumb');
    thumbs.forEach(function(thumb, index) {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function showImage(pieceIndex, imageIndex) {
    const piece = pieces[pieceIndex];
    const total = piece.images.length;
    const isNewPiece = pieceIndex !== currentPieceIndex;
    currentPieceIndex = pieceIndex;
    currentImageIndex = (imageIndex + total) % total;

    lightboxImage.src = piece.images[currentImageIndex];
    lightboxImage.alt = piece.name;
    lightboxTitle.textContent = piece.name;
    lightboxDescription.textContent = piece.description;

    if (isNewPiece || lightboxThumbs.children.length !== total) {
        buildThumbs(piece);
    }
    updateActiveThumb();
}

if (gallery) {
    const pieceElements = document.querySelectorAll('.piece-image');

    pieceElements.forEach(function(el) {
        el.addEventListener('click', function() {
            const pieceIndex = parseInt(el.dataset.pieceIndex, 10);
            showImage(pieceIndex, 0);
            lightbox.classList.add('open');
        });
    });
}

document.querySelector('.lightbox-close').addEventListener('click', function() {
    lightbox.classList.remove('open');
});

document.querySelector('.lightbox-prev').addEventListener('click', function() {
    showImage(currentPieceIndex, currentImageIndex - 1);
});

document.querySelector('.lightbox-next').addEventListener('click', function() {
    showImage(currentPieceIndex, currentImageIndex + 1);
});

const banner = document.querySelector('.banner');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});
