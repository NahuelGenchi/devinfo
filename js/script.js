const header = document.querySelector(".header");
const main = document.querySelector(".mainIndex");
const footer = document.querySelector(".footer");

const appearance = document.querySelector("#appearance");
appearance.lightMode = true;

function lightMode() {
    if (appearance.lightMode === false) {
        header.classList.add("header-dark");
        main.classList.add("main-dark");
        footer.classList.add("footer-dark");
        header.classList.remove("header-light");
        main.classList.remove("main-light");
        footer.classList.remove("footer-light");
        appearance.lightMode = true;
    } else {
        header.classList.add("header-light");
        main.classList.add("main-light");
        footer.classList.add("footer-light");
        header.classList.remove("header-dark");
        main.classList.remove("main-dark");
        footer.classList.remove("footer-dark");
        appearance.lightMode = false;
    };
};

appearance.addEventListener("click", lightMode);

