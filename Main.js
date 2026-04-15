window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const button = document.getElementById("Discord");

    loader.classList.add("hidden");
    
    console.log("button:", button);

    button.onclick = function (){

        button.classList.toggle("active")

        console.log(button)

    }
}); 