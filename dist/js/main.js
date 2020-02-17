const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const bmi = document.querySelector(".bmi");
const btn = document.querySelector(".btn1");
const btn1 = document.querySelector(".btn2");

btn.addEventListener("click", Converter);

function Converter() {
  if (height.value > 0 && weight.value > 0) {
    const newHeight = parseFloat(height.value);
    const newWeight = parseFloat(weight.value);
    const newBmi = newWeight / (newHeight * newHeight).toFixed(2);
    bmi.value = newBmi.toFixed(2);
  } else if ((height.value === "" || weight.value === "")) {
    alert(`Fields Can't Be Empty`);
  } else {
    alert(`Values must be greater than 0`)
  }
}

btn1.addEventListener("click", Reset);

function Reset() {
  height.value = 0;
  weight.value = 0;
  bmi.value = 0;
}