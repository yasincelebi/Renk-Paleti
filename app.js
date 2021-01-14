const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".renk");
color.style.textTransform = "capitalize";

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandom()];
  }
  color.textContent = hex;
  document.body.style.backgroundColor = hex;
});
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
