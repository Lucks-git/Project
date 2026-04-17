window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const Dis = document.getElementById("Discord");
    const inst = document.getElementById("Instagram")
    const Steam = document.getElementById("Steam")

    Dis.onclick = function (){
       Dis.classList.toggle("active");
       window.location.href = "https://discord.com/users/758173416909176853";
    }
    inst.onclick = function (){
       inst.classList.toggle("active");
       window.location.href = "https://www.instagram.com/_lu.cks?igsh=bWd3c2k1bjhxcHc1";
    }
    Steam.onclick = function (){
       Steam.classList.toggle("active");
       window.location.href = "https://steamcommunity.com/id/idfcwhoyouare/";
    }

    loader.classList.add("hidden");
}); 