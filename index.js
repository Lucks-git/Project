 const bar = document.querySelector(".TBox");
 const showAfter = 0;
 
window.addEventListener('scroll', () => {
  if (window.scrollY >= showAfter){
    bar.classList.add('visible');
  }else{
    bar.classList.remove('visible');
  }
}) 
 
 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  });