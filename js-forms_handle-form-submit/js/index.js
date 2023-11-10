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
  console.log(formData);

  const data = Object.fromEntries(formData);
  console.log(data);

  // // age + badnes sum
  // console.log(formElements.age.value);
  // const ageBadness =
  //   Number(formElements.age.value) + Number(formElements.badness.value);
  // console.log(`The age-badness-sum of ${data.firstName} is ${ageBadness}`);

  // event.target.reset();
  // formElements.firstName.focus();
});
