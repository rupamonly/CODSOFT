// =======================toggle style switcher=====================================

const styleSwitcherToggle = document.querySelector(".theme-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".theme-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".theme-switcher").classList.contains("open")) {
        document.querySelector(".theme-switcher").classList.remove("open");
    }
})




const alternateStyles = document.querySelectorAll(".alternate-style");
function SetActiveTheme(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })

}



// =================light and dark toggle=============================
const litDark = document.querySelector(".light-dark");
lightDark.addEventListener("click", () => {
    litDark.querySelector("i").classList.toggle("fa-moon");
    litDark.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light");
})
document.addEventListener("DOMContentLoaded", () => {

    if (document.body.classList.contains("light")) {
        litDark.querySelector("i").classList.add("fa-moon");
        litDark.querySelector("i").classList.remove("fa-sun");
    } else {
        litDark.querySelector("i").classList.add("fa-sun");
        litDark.querySelector("i").classList.remove("fa-moon");
    }
});


