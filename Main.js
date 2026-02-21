window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const button = document.getElementsByClassName(".MInfo");

    loader.classList.add("hidden");

    button.addEventListener("click", () => {

         button.classList.toggle("active")
         console.log("fuck you")

        }
    ) 
}); 