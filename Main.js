window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const Dis = document.getElementById("Discord");
    const inst = document.getElementById("Instagram")
    const Steam = document.getElementById("Steam")

    loader.classList.add("hidden");

    Dis.onclick = function (){
       Dis.classList.toggle("active");
       window.location.href = "https://discord.com/";
    }
    inst.onclick = function (){
       inst.classList.toggle("active");
       window.location.href = "https://Youtube.com/";
    }
    Steam   .onclick = function (){
       Steam.classList.toggle("active");
       window.location.href = "https://steamcommunity.com/id/idfcwhoyouare/";
    }
}); 