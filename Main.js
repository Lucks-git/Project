 const bar = document.querySelector(".MInfo");
 const showAfter = 150;
 
window.addEventListener('Click', () => {
 bar.classList.add("Click")
}) 
 
 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  });