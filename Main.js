 const button = document.querySelector(".MInfo");
 const showAfter = 150;
 
button.addEventListener('click', () => {
 button.classList.add("click")
}) 
 
 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});