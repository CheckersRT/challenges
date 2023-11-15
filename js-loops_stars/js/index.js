console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    if (filledStars >= i) {
      const star = document.createElement("img");
      star.src = "../js-loops_stars/assets/star-filled.svg";
      star.alt = "filled star";
      starContainer.append(star);
    } else {
    const star = document.createElement("img");
    star.src = "../js-loops_stars/assets/star-empty.svg";
    star.alt = "empty star";

    starContainer.append(star);
  }
  }

  //--^-- your code here --^--
}

renderStars();
