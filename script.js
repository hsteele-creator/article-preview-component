const socials = document.querySelector(".socials");
const socialContainer = document.querySelector(".social-media")
const body = document.querySelector("body");
const author = document.querySelector(".author");
const iconButton = document.querySelector(".icon-btn");

socials.addEventListener("click", function() {
    socialContainer.classList.remove("hidden");
    author.classList.add("hidden");
    console.log("clicked");
})

iconButton.addEventListener("click", function() {
    console.log("clicked");
    socialContainer.classList.add("hidden");
    author.classList.remove("hidden");
})
