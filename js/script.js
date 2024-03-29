// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvcc4pu2G9nINOR_kUrZF74RzES2dvs3A",
    authDomain: "ducs-alumni.firebaseapp.com",
    projectId: "ducs-alumni",
    storageBucket: "ducs-alumni.appspot.com",
    messagingSenderId: "795236711531",
    appId: "1:795236711531:web:9b75ae244a5a7151a6852e",
    measurementId: "G-5RGLFPWC11"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}
var database = firebase.database()

//navbar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

//countdown

// Set the date we're counting down to
const countDownDate = new Date("Mar 25, 2023 15:37:25").getTime();

// Update the count-down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count-down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Ensure double digits for days, hours, minutes and seconds
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Display the result in the element with respective ids"
    document.getElementById("days").innerHTML = days + "&nbsp:";
    document.getElementById("hours").innerHTML = hours + "&nbsp:";
    document.getElementById("minutes").innerHTML = minutes + "&nbsp:";
    document.getElementById("seconds").innerHTML = seconds;

    // If the count-down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = ":)";
        document.getElementById("hours").innerHTML = " :>";
        document.getElementById("minutes").innerHTML = ":)";
        document.getElementById("seconds").innerHTML = ":>";

    }
}, 1000);

// //news data
const container = document.getElementById("news_display");
const news_data = fetch("../data/newsData.json")
    .then(results => results.json())
    .then(data => {
            console.log(data);
            data.forEach((result, idx) => {
                const content = `
                      <div class="news_card" id="card-${idx}">
                          <img src=${result.url} alt = "news">
                          <div class="news_card_content">
                              <div class="news_card_title">
                                  <h3>${result.title}</h3>
                              </div>
                              <div class="news_card_body">
                                  <p>${result.description}</p>
                                  <a href="#">Read More</a>
                              </div>
                          </div>
                      </div>
                   `;
                // Append newyly created card element to the container
                container.innerHTML += content;
            })
        }
    );

// //alumni data
// const swiper_card = document.getElementById('cardsToDisplay');
// const alumni_slider_data = fetch("../data/data.json")
//     .then(results => results.json())
//     .then(data => {
//         console.log(data);
//         data.forEach((result) => {
//             const content = `
//                     <div class="card swiper-slide">
//                         <div class="card-content">
//                             <h1 class="name">${result.name}</h1>
//                             <h2 class="batch">${result.batch}</h2>
//                         </div>
//                         <h1 class="description">${result.description}</h1>
//                     </div>
//             `;
//             // Append newyly created card element to the container
//             swiper_card.innerHTML += content;
//         });
//     })


// const container = document.getElementById("");

// //swiper
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
// });

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});



var flag = true;
database.ref('flag').on('value',function (snapshot){
    const data = snapshot.val()
    console.log(data);
    flag = data;
    if(flag){
        //activate
        document.getElementById('main').style.display = "none";
        document.getElementById('div2').style.display = "block";
    } else {
        //de activate
        document.getElementById('main').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
    }
});

database.ref('content').on('value',function (snapshot){
    const data = snapshot.val()
    if(flag){
        document.getElementById('content').innerHTML = data;
    }
});

database.ref('image').on('value',function (snapshot){
    const data = snapshot.val()
    if(flag){
        document.getElementById('image').src = data;
        document.getElementById('image').style.display = 'block';
    } else {
        document.getElementById('image').style.display = 'none';
    }
});

database.ref('emoji').on('value',function (snapshot){
    const data = snapshot.val()
    if(flag){
        document.getElementById('emoji').innerHTML = data;
    }
});




