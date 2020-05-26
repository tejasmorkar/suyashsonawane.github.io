let hamButton = document.querySelector("#hamButton");

let quotes = [
    `"The only way to learn a new programming language is by writing programs in it." <br>- Dennis Ritchie`,
    `"Sometimes it's better to leave something alone, to pause, and that's very true of programming." <br>- Joyce Wheeler`,
    `"Testing leads to failure, and failure leads to understanding." <br>- Burt Rutan`,
    `"The best error message is the one that never shows up." <br>- Thomas Fuchs`
];
// console.log(quotes[(Math.random() * quotes.length) | 0]);
hamButton.addEventListener("click", () => {
    $("#quotes").html(quotes[(Math.random() * quotes.length) | 0]);
    $(".container").animate({
            opacity: "0"
        },
        250
    );
    setTimeout(() => {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".container2").style.display = "flex";
        $(".container2").animate({
            opacity: "1"
        });
    }, 500);
});
let closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", () => {
    $(".container2").animate({
            opacity: "0"
        },
        250
    );
    setTimeout(() => {
        document.querySelector(".container2").style.display = "none";
        document.querySelector(".container").style.display = "initial";
        $(".container").animate({
            opacity: "1"
        });
    }, 250);
});

// var o = $(".card");
// $("#top").on("mousemove", function (t) {
//     var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
//         n = ($(window).innerHeight() / 2 - t.pageY) / 10;
//     o.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
//     console.log(e + ' ' + n);
// })

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'flip',
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})