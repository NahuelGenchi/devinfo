const header = document.querySelector(".header-fixed");
const main = document.querySelector(".mainIndex");
const footer = document.querySelector(".footer");
const appearance = document.querySelector("#appearance");

function lightMode() {
    header.classList.remove("header-dark");
    main.classList.remove("main-dark");
    footer.classList.remove("footer-dark");
    header.classList.add("header-light");
    main.classList.add("main-light");
    footer.classList.add("footer-light");
};
function darkMode() {
    header.classList.remove("header-light");
    main.classList.remove("main-light");
    footer.classList.remove("footer-light");
    header.classList.add("header-dark");
    main.classList.add("main-dark");
    footer.classList.add("footer-dark");
};
function appearanceFunction() {
    if (localStorage.getItem("appearance") == "dark") {
        darkMode();
    } else {
        lightMode();
    };
};
appearanceFunction();

function appearanceChange() {
    if (localStorage.getItem("appearance") == "dark") {
        localStorage.setItem("appearance", "light");
        appearanceFunction();
    } else {
        localStorage.setItem("appearance", "dark");
        appearanceFunction();
    };
    console.log("hi");
};



appearance.addEventListener("click", appearanceChange);