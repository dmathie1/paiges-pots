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
        images: ["images/Ace.jpeg", "images/Ace2.jpeg", "images/AllCard.jpeg"],
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
        images: ["images/Joker.jpeg", "images/Joker2.jpeg", "images/AllCard.jpeg"],
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
        images: ["images/Queen2.jpeg", "images/Queen.jpeg", "images/QueenAce.jpeg", "images/AllCard.jpeg"],
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
        images: ["images/Knight1.jpeg", "images/Knight2.jpeg"],
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

function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('no-scroll', open);
    toggleButton.setAttribute('aria-expanded', open);
    toggleButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

// The same button opens and closes the menu; its three lines animate into
// an X in place (see .burger-line in styles.css).
toggleButton.addEventListener('click', function() {
    setMenu(!nav.classList.contains('open'));
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggleButton.focus();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && nav.classList.contains('open')) {
        setMenu(false);
    }
});

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
        img.decoding = 'async';
        img.alt = '';
        heroTrack.appendChild(img);
    });

    // The scroll distance (-50%) is worked out from the strip's width, but the
    // photos have no width until they download. On a first visit (nothing
    // cached yet) some browsers lock in that distance while the strip is still
    // almost empty, so the banner barely moves until the page is refreshed.
    // Restarting the animation whenever the strip changes size fixes this.
    let lastWidth = 0;
    let restartQueued = false;
    function restartHeroScroll() {
        restartQueued = false;
        const width = heroTrack.scrollWidth;
        if (width === lastWidth) return;
        lastWidth = width;
        heroTrack.style.animation = 'none';
        void heroTrack.offsetWidth; // force the browser to apply the reset
        heroTrack.style.animation = '';
    }
    function queueRestart() {
        if (restartQueued) return;
        restartQueued = true;
        requestAnimationFrame(restartHeroScroll);
    }
    if ('ResizeObserver' in window) {
        new ResizeObserver(queueRestart).observe(heroTrack);
    } else {
        heroTrack.querySelectorAll('img').forEach(function(img) {
            img.addEventListener('load', queueRestart);
        });
        window.addEventListener('resize', queueRestart);
    }
}

// The order pieces appear in the gallery: available first, sold after.
// The gallery grid and the prev/next links on piece pages both use this,
// so they always match.
function galleryOrder() {
    return pieces.filter(function(p) { return !p.sold; })
        .concat(pieces.filter(function(p) { return p.sold; }));
}

// Gallery grid: each piece links straight to its own page rather than
// opening a popup, so it works as a normal, shareable product page.
const gallery = document.querySelector('.gallery-grid');

if (gallery) {
    const ordered = galleryOrder();

    ordered.forEach(function(piece) {
        const div = document.createElement('div');
        div.classList.add('piece');
        div.dataset.status = piece.sold ? 'sold' : 'available';
        const soldMarkup = piece.sold
            ? '<span class="sold-badge">Sold</span>'
            : '';
        div.innerHTML = `
            <a class="piece-image" href="pieces/${piece.slug}.html">
                <img src="${piece.images[0]}" alt="${piece.name}" loading="lazy">
                <h3 class="piece-title">${piece.name}</h3>
                ${soldMarkup}
            </a>
            <p class="piece-caption">${piece.name}</p>
        `;
        gallery.appendChild(div);
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterButtons.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            gallery.querySelectorAll('.piece').forEach(function(el) {
                el.hidden = btn.dataset.filter !== 'all' && el.dataset.status !== btn.dataset.filter;
            });
        });
    });
}

// Piece pages: point the previous/next links at the neighbouring pieces in
// gallery order, wrapping round at either end. The links written in each
// page's HTML are only a fallback for when JavaScript is off.
const piecePagination = document.querySelector('.piece-pagination');

if (piecePagination) {
    const order = galleryOrder();
    const slug = window.location.pathname.split('/').pop().replace(/\.html$/, '');
    const index = order.findIndex(function(p) { return p.slug === slug; });
    if (index !== -1) {
        const prev = order[(index - 1 + order.length) % order.length];
        const next = order[(index + 1) % order.length];
        const prevLink = piecePagination.querySelector('.prev-piece');
        const nextLink = piecePagination.querySelector('.next-piece');
        if (prevLink) {
            prevLink.href = prev.slug + '.html';
            prevLink.innerHTML = '&larr; ' + prev.name;
        }
        if (nextLink) {
            nextLink.href = next.slug + '.html';
            nextLink.innerHTML = next.name + ' &rarr;';
        }
    }
}

// Piece detail pages: clicking a thumbnail swaps the large photo. No-op on
// pages that don't have this markup (index, gallery, contact).
const pieceMainImage = document.querySelector('.piece-main-image');

if (pieceMainImage) {
    const pieceThumbs = document.querySelectorAll('.piece-thumb');
    pieceThumbs.forEach(function(thumb) {
        function selectThumb() {
            pieceMainImage.src = thumb.dataset.full;
            pieceMainImage.alt = thumb.alt;
            pieceThumbs.forEach(function(t) {
                t.classList.remove('active');
            });
            thumb.classList.add('active');
        }
        thumb.addEventListener('click', selectThumb);
        thumb.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectThumb();
            }
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

// Forms marked data-ajax send in the background and show a message
// instead of leaving the page.
document.querySelectorAll('form[data-ajax]').forEach(function(form) {
    const status = form.parentElement.querySelector('.form-status');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submit = form.querySelector('button[type="submit"]');
        submit.disabled = true;
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        }).then(function(res) {
            if (!res.ok) throw new Error('failed');
            form.reset();
            status.textContent = form.dataset.success;
        }).catch(function() {
            status.textContent = 'Something went wrong. Please try again, or message me on Instagram.';
        }).finally(function() {
            submit.disabled = false;
        });
    });
});

// Contact form: ?piece=Name in the URL pre-fills the "piece" field.
const pieceField = document.getElementById('piece');
const pieceParam = new URLSearchParams(window.location.search).get('piece');
if (pieceField && pieceParam) pieceField.value = pieceParam;
