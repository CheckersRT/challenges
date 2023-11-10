console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
//   console.log(event.target);
//   console.log(event.target.elements);

  const formElements = event.target.elements;
//   console.log(formElements.complaint);
//   console.log(formElements.complaint.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  event.target.reset();
  formElements.firstName.focus();
});
