console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastEntry = document.createElement("li");
  newToastEntry.classList.add("toast-container__message");
  newToastEntry.textContent = "I'm a new message";
  toastContainer.append(newToastEntry); 

});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
