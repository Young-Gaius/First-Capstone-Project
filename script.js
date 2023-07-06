const menu = document.querySelector(".list");
const icon = document.querySelector(".hide");
const cancel = document.querySelector(".cancel-btn")

icon.addEventListener("click", () => {
menu.style.display="flex" 
cancel.style.display="block"
icon.style.display="none"
})

cancel.addEventListener("click", () => {
    menu.style.display="none" 
    cancel.style.display="none"
    icon.style.display="block"
})

const images = document.querySelectorAll(".four");
const button = document.querySelector(".button-more")

button.addEventListener("click", ( )=> {
images.forEach((item) => {
    item.style.display="flex"
})
})
