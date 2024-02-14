var contt = document.querySelector(".container");
var love = document.querySelector("i");
contt.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
