window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const Dis = document.getElementById("Discord");
    const inst = document.getElementById("Instagram");
    const Steam = document.getElementById("Steam");
    const instance= document.getElementById("RBLX");

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
    instance.onclick = function (){
        instance.classList.toggle("active");
        window.locarion.href = "https://www.roblox.com/users/1222144987";
    }

    loader.classList.add("hidden");
}); 