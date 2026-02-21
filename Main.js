 const bar = document.querySelector(".MInfo");
 const showAfter = 150;
 
window.addEventListener('click', () => {
 bar.classList.add("click")
}) 
 
 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});