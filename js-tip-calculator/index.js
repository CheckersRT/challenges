let mealCost = 12.99;
let tipPercentage = 0.1;

let tipAmount = mealCost * tipPercentage;

console.log(tipAmount);

let totalCost = mealCost + tipAmount;

console.log(totalCost);

const finalCost = totalCost.toFixed(2);

console.log(finalCost);

console.log({});
console.log([]);
console.log(x => x *2);

console.log(typeof (x => x * 2));

let wine = 0.5
let beer = 1.5

let guests = 120

function amountOfWine(guests, drink) {
    result = guests * drink;
    console.log(result);
}

drink = wine;

console.log(amountOfWine);