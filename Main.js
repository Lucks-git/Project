 const button = document.querySelector(".MInfo");
 
button.addEventListener('click', () => {
 button.classList.toggle("active")
}) 
 
 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});