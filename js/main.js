$(document).ready(function () {
    // $('.sidenav').sidenav();
    AOS.init();
    Array.prototype.random = function () {
        return this[Math.floor((Math.random() * this.length))];
    }
    pic = ["1.svg", "2.svg", "3.svg"]
    $("#my_image").attr("src", `../images/${pic.random()}`);
    console.log(pic.random())
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .5
    })
    // for scroll
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// let instance
// document.addEventListener('DOMContentLoaded', function () {

// });

var elems = document.querySelectorAll('.sidenav');
const instance = M.Sidenav.init(elems, {
    edge: 'left'
});

var typed = new Typed(".typed", {
    strings: ["Hi!<br>I’m a<br>Web<br>Developer.", "Hi!<br>I’m a<br>Android<br>Developer.", "Hi!<br>I’m a<br>Software<br>Developer.", "Hi!<br>I’m <br>Suyash<br>Sonawane."],
    smartBackspace: true, // Default value
    typeSpeed: 30,
    backSpeed: 30,
    showCursor: false,
    backDelay: 1200,
    contentType: 'html',
});

// var rellax = new Rellax('.rellax');

const scrollto = (hash) => {
    console.log(hash)

    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 800)

}
console.log(localStorage.getItem("hasSubmitted"))
check = localStorage.getItem("hasSubmitted")
var vm = new Vue({
    el: '.contact-form',
    data: {
        is_submitted: false,
        is_submitting: false,
        name: null,
        email: null,
        message: null
    },
    methods: {
        ready() {
            if (check)
                console.log("aler")
        },
        onSubmit() {

            this.is_submitted = true
            if (localStorage.getItem('hasSubmitted') != null) {
                localStorage.setItem("hasSubmitted", 1);
                console.table({
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                this.is_submitted = true
                this.is_submitting = true
                setTimeout(() => {
                    this.is_submitting = false
                }, 1000);
            } else
                console.log("shit")
        }
    }
})