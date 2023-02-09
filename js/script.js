//alumni data
const swiper_card = document.getElementById('cardsToDisplay');
const alumni_slider_data = fetch("../data/data.json")
    .then(results => results.json())
    .then(data => {
        console.log(data);
        data.forEach((result, idx) => {
            const content = `
                    <div class="card swiper-slide">
                        <div class="card-content">
                            <h1 class="name">${result.name}</h1>
                            <h2 class="batch">${result.batch}</h2>
                        </div>
                        <h1 class="description">${result.description}</h1>
                    </div>
            `;
            // Append newyly created card element to the container
            swiper_card.innerHTML += content;
        });
    })


// const container = document.getElementById("");

//swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});

