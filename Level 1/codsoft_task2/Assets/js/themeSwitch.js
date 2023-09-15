// ===============light mode and dark mode==========================

const lightDark = document.querySelector(".light-dark")
window.addEventListener("load", () => {
    if (document.body.classList.contains("light")) {
        lightDark.querySelector("i").classList.add("fa-moon")
        // lightDark.querySelector("i").classList.remove("fa-sun")

    }
    else {
        lightDark.querySelector("i").classList.add("fa-sun")
        // lightDark.querySelector("i").classList.remove("fa-moon")

    }
})