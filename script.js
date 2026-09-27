const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Each entry is one gallery piece. "images" holds every photo of that piece,
// with the first image shown in the gallery grid and used as the main photo
// on the piece's own page. "slug" is used to build the URL of that page
// (pieces/<slug>.html). "price" is left blank for now — fill it in per
// piece (e.g. price: "£45") once you're ready to show prices; it will show
// as "Price on request" until then.
const pieces = [
    {
        name: "Ace of Spades",
        slug: "ace-of-spades",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Ace.jpeg", "images/Ace2.jpeg"],
        price: null,
        sold: true
    },
    {
        name: "A Winning Hand",
        slug: "a-winning-hand",
        description: "Ceramic playing cards fanned out in hand \u2014 Queen of Hearts, Joker and Ace of Spades.",
        images: ["images/AllCard.jpeg"],
        price: null,
        sold: true
    },
    {
        name: "Gothic Cathedral",
        slug: "gothic-cathedral",
        description: "Hand-built and hand-painted blue and white ceramic sculpture.",
        images: [
            "images/Building1.jpeg", "images/Building2.jpeg", "images/Building3.jpeg",
            "images/Building4.jpeg", "images/Building5.jpeg", "images/Building6.jpeg",
            "images/Building7.jpeg"
        ],
        price: null
    },
    {
        name: "Cigarette Box",
        slug: "cigarette-box",
        description: "Ceramic sculpture with hand-painted illustrations and warning labels.",
        images: [
            "images/CigBox.jpeg", "images/CigBox2.jpeg", "images/CigBox3.jpeg",
            "images/CigBox4.jpeg", "images/CigBox5.jpeg", "images/CigBox6.jpeg",
            "images/CigBox7.jpeg"
        ],
        price: null,
        sold: true
    },
    {
        name: "Hand Holding a Cigarette",
        slug: "hand-holding-a-cigarette",
        description: "Ceramic sculpture.",
        images: ["images/CigHand.jpeg", "images/CigHand2.jpeg", "images/CigHand3.jpeg"],
        price: null
    },
    {
        name: "Cowboy Cup",
        slug: "cowboy-cup",
        description: "Hand-painted desert cowboy scene cup.",
        images: [
            "images/CowboyCup.jpeg", "images/CowboyCup2.jpeg", "images/CowboyCup3.jpeg",
            "images/CowboyCup4.jpeg", "images/CowboyCup5.jpeg", "images/CowboyCup6.jpeg"
        ],
        price: null,
        sold: true
    },
    {
        name: "Joker",
        slug: "joker",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Joker.jpeg", "images/Joker2.jpeg"],
        price: null,
        sold: true
    },
    {
        name: "Playing Cards Box",
        slug: "playing-cards-box",
        description: "Ceramic sculpture of a deck of playing cards.",
        images: [
            "images/PCardB1.jpeg", "images/PCardB2.jpeg", "images/PCardB3.jpeg",
            "images/PCardB4.jpeg", "images/PCardB5.jpeg", "images/PCardB6.jpeg",
            "images/PCardB7.jpeg", "images/PCardB8.jpeg", "images/PCardB9.jpeg",
            "images/PCardB10.jpeg", "images/PCardB11.jpeg"
        ],
        price: null
    },
    {
        name: "Queen of Hearts",
        slug: "queen-of-hearts",
        description: "Hand-painted ceramic playing card.",
        images: ["images/Queen2.jpeg", "images/Queen.jpeg", "images/QueenAce.jpeg"],
        price: null
    },
    {
        name: "Tarot Cards Box",
        slug: "tarot-cards-box",
        description: "Ceramic sculpture of a tarot card box.",
        images: [
            "images/TBox.jpeg", "images/TBox2.jpeg", "images/TBox3.jpeg",
            "images/TBox4.jpeg", "images/TBox5.jpeg", "images/TBox6.jpeg"
        ],
        price: null
    },
    {
        name: "Better Luck Next Time",
        slug: "better-luck-next-time",
        description: "Hand-painted ceramic cup with an archer design and lettering.",
        images: [
            "images/Archer1.jpeg", "images/Archer2.jpeg", "images/Archer3.jpeg", "images/Archer4.jpeg"
        ],
        price: null
    },
    {
        name: "Sleepy Horse Cup",
        slug: "sleepy-horse-cup",
        description: "Hand-painted ceramic cup with a horse illustration and a green-glazed interior.",
        images: ["images/Horse1.jpeg", "images/Horse2.jpeg", "images/Horse3.jpeg"],
        price: null
    },
    {
        name: "Jousting Knights",
        slug: "jousting-knights",
        description: "Hand-painted ceramic dish with a jousting knights design and chain-link border.",
        images: ["images/Knight1.jpeg", "images/Kinght2.jpeg"],
        price: null
    },
    {
        name: "Lucha Libre Cup",
        slug: "lucha-libre-cup",
        description: "Hand-painted ceramic cup with a luchador design.",
        images: [
            "images/Luch1.jpeg", "images/Luch2.jpeg", "images/Luch3.jpeg",
            "images/Luch4.jpeg", "images/Luch5.jpeg"
        ],
        price: null
    },
    {
        name: "Two for Joy",
        slug: "two-for-joy",
        description: "Hand-painted ceramic cup with a magpie illustration and lettering.",
        images: [
            "images/Magpie1.jpeg", "images/Magpie2.jpeg", "images/Magpie3.jpeg", "images/Magpie4.jpeg"
        ],
        price: null,
        sold: true
    },
    {
        name: "Wakey Wakey",
        slug: "wakey-wakey",
        description: "Hand-painted ceramic cup with a star motif and lettering, blue-glazed interior.",
        images: ["images/Wake1.jpeg", "images/Wake2.jpeg", "images/Wake3.jpeg"],
        price: null,
        sold: true
    },
    {
        name: "Dancing Skeletons Mug",
        slug: "dancing-skeletons-mug",
        description: "Hand-painted ceramic mug with a star-shaped handle and a dancing skeletons illustration.",
        images: ["images/Skel1.jpeg", "images/Skel2.jpeg", "images/Skel3.jpeg"],
        price: null,
        sold: true
    }
];

toggleButton.addEventListener('click', function() {
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

// Gallery grid: each piece links straight to its own page rather than
// opening a popup, so it works as a normal, shareable product page.
if (gallery) {
    pieces.forEach(function(piece) {
        const div = document.createElement('div');
        div.classList.add('piece');
        const soldMarkup = piece.sold
            ? '<span class="sold-badge">Sold</span>'
            : '';
        div.innerHTML = `
            <a class="piece-image" href="pieces/${piece.slug}.html">
                <img src="${piece.images[0]}" alt="${piece.name}">
                <h3 class="piece-title">${piece.name}</h3>
                ${soldMarkup}
            </a>
            <p class="piece-caption">${piece.name}</p>
        `;
        gallery.appendChild(div);
    });
}

// Piece detail pages: clicking a thumbnail swaps the large photo. No-op on
// pages that don't have this markup (index, gallery, contact).
const pieceMainImage = document.querySelector('.piece-main-image');

if (pieceMainImage) {
    const pieceThumbs = document.querySelectorAll('.piece-thumb');
    pieceThumbs.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            pieceMainImage.src = thumb.dataset.full;
            pieceMainImage.alt = thumb.alt;
            pieceThumbs.forEach(function(t) {
                t.classList.remove('active');
            });
            thumb.classList.add('active');
        });
    });
}

const banner = document.querySelector('.banner');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});
