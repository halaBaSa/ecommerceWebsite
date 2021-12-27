// carousel

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    }
});

/*----------Portfolio---------------*/

// counter
/*
- call the element byId
- add inner html the number we want to start with in the counter
-add the number we  want to finosh with in the counter
- add a delay between numbers
*/

const listOfCounts = document.querySelectorAll(".single-count");

listOfCounts.forEach(element => {
    var end = element.getAttribute('data-count');
    var current = 0;
    var speed = Math.floor(10000 / end);
    console.log(Math.abs(1.92));

    var counter = setInterval(() => {
        current += 1;
        element.innerHTML = current;
        if (current == end) {
            clearInterval(counter);
        }
    }, speed);

})

/*-----------------products details------------------*/

// product



const brandsInput = document.querySelectorAll('.brands-input');
const colorsInput = document.querySelectorAll('.color-input');

function clearInput(groupOfInputs) {
    groupOfInputs.forEach(element => {
        element.checked = false;
    });
};

/*
- call the the element by its id or class
- do a function that will replace an image by another image
*/

const smallImgs = document.querySelectorAll('.small-img');
const bigImg = document.querySelector('#big-img');

smallImgs.forEach(element => {
    console.log(element.getAttribute('src'));
    element.addEventListener('click', () => {
        var smallImgSrc = element.getAttribute('src');
        bigImg.setAttribute('src', smallImgSrc);
    })
});


// categories

const ulCategory = document.querySelectorAll(".bac-category");

var wachMsdod ="rah msdod";


ulCategory.forEach(element => {
    element.addEventListener('click', () => {
        if (wachMsdod == "rah msdod") {
            element.classList.add("color-styling");
            var thisCatchoices = element.nextElementSibling;
            thisCatchoices.classList.remove("hidden");
            wachMsdod = "m7lol";
        }else{
            element.classList.remove("color-styling");
            var thisCatchoices = element.nextElementSibling;
            thisCatchoices.classList.add("hidden");
            wachMsdod = "rah msdod";
        }
    });
});