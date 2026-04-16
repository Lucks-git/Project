window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const button = document.getElementById("Discord");

    loader.classList.add("hidden");

    button.onclick = function (){
       button.classList.toggle("active");
       window.location.href = "https://discord.com/";
    }
}); 