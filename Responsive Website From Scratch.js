window.addEventListener("scroll", function () {
    'use strict';
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
    'use strict';
    var header = document.querySelector("header");
    header.classList.toggle("active");
}