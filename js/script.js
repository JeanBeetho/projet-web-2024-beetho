document.addEventListener("DOMContentLoaded", function() {
    const menuImg = document.querySelector(".imenu");
    const menu = document.querySelector(".menu");

    menuImg.addEventListener("click", function() {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
