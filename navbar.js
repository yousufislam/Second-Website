// const nav = document.querySelector("#bar2");
// const NavTop = nav.offsetTop;

// function fixnavbar() {
//     if (window.scrollY >= NavTop) {
//         document.body.style.paddingTop = nav.offsetHeight + "px";
//         document.body.classList.add("fixed-nav");
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove("fixed-nav");
//     }
// }
// window.addEventListener("scroll", fixnavbar);


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

window.onscroll = function () {
    if (window.onscrollY > sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
};