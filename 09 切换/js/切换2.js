var dot1 = document.getElementById("color1");
var dot2 = document.getElementById("color2");

function changeColor(newColor, id) {
  if (id == "color1") {
    dot1.classList.add("coloractiv");
    dot2.classList.remove("coloractiv2");
  } else {
    dot2.classList.add("coloractiv2");
    dot1.classList.remove("coloractiv");
  }
  document.documentElement.style.setProperty("--turn", newColor);
}