AOS.init();
const menu = document.querySelector(".header__list");
const btn_menu = document.querySelector(".header__humbger");

btn_menu.addEventListener("click", () => {
    btn_menu.classList.toggle("active");
    menu.classList.toggle("active")
})