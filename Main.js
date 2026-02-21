window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const button = document.getElementById("MInfo");

    loader.classList.add("hidden");

    button.addEventListener("click", click => {

         button.classList.toggle("active")
         console.log(button)

        }
    ) 
}); 