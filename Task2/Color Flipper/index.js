const colors = ["green", "red", "orange", "blue"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
});