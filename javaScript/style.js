let items = document.querySelectorAll('.card');
items.forEach((e) => {
    e.addEventListener('mouseover', () => {
        let a = e.childNodes;
        let ele = a[3];
        ele.style.display = "flex";
        ele.classList.add('anim');
        e.addEventListener('mouseout', () => {
            ele.style.display = "none";
        });
    });
});
let navbar = document.querySelector('.navbar');
let nav_image = document.querySelector('.navbar img');
console.log(nav_image);

var total = 0;
window.addEventListener('load', () => {
    let ele = document.querySelector('.main-bar');
    let disScrolled = document.body.scrollTop;
    let eleOffSet = ele.getBoundingClientRect().top;
    total = disScrolled + eleOffSet;
});
window.addEventListener('scroll', () => {
    let a = window.pageYOffset;
    let navlistitem = document.querySelectorAll('.nav-list-item a');
    let slider = document.querySelectorAll('.slider');
    if (a >= total) {
        navlistitem.forEach((e) => {
            e.style.color = "white";
        })
        slider.forEach((e) => {
            e.style.background = "white";
        })
        navbar.style.background = "#2b2d42";
        nav_image.style.display = "none";
        navbar.style.justifyContent = "center"
    } else {
        navbar.style.background = "#8d99ae";
        navlistitem.forEach((e) => {
            e.style.color = "#2b2d42";
        })
        slider.forEach((e) => {
            e.style.background = "#2b2d42";
        })
        nav_image.style.display = "flex";
        navbar.style.justifyContent = "space-between"
    }
})