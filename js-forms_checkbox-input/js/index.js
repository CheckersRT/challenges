console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  let formElements = event.target.elements;
  console.log(formElements.tos.checked);
  event.preventDefault();

  if (formElements.tos.checked) {
    alert("Form submitted");
    // hideTosError();
    return;
  } 
  // showTosError();

});

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

tosCheckbox.addEventListener("input", (event) => {

  console.log(event.target.checked);
  if (event.target.checked) {
    hideTosError();
    return;
  } showTosError();
});


