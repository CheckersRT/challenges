console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const pizzaOneArea = Math.PI * (diameter1 / 2) ** 2;
  const pizzaTwoArea = Math.PI * (diameter2 / 2) ** 2;
  const pizzaGain = ((pizzaTwoArea - pizzaOneArea) / pizzaOneArea) * 100;
  console.log(pizzaGain);
  const pizzaGainWholeNumber = Math.round(pizzaGain);
  console.log(pizzaGainWholeNumber);
  console.log(output.textContent);
  output.textContent = pizzaGainWholeNumber;
  console.log(output.textContent);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
  console.log(pizzaElement.style.width);
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(pizzaSize1, pizzaSize2) {
  if (pizzaSize2 <= pizzaSize1) {
    outputSection.style.backgroundColor = "var(--red)";
  }
}