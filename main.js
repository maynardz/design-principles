let bars = document.getElementById("nav-action");
let nav = document.getElementById("nav");


bars.addEventListener("click", barClicked, false);

function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

$(function () {
  $('[data-toggle="popover"]').popover()
})