const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const screen = document.querySelector("#screen");

let count = 0;
increase.addEventListener("click", () => {
  count++;
  screen.innerHTML = count;
});

reset.addEventListener("click", () => {
  count = 0;
  screen.innerHTML = count;
});

decrease.addEventListener("click", () => {
  count--;
  screen.innerHTML = count;
});
