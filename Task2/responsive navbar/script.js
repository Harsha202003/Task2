const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("show");
});
