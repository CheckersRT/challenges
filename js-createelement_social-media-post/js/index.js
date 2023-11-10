console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const section = document.createElement("section");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

section.classList.add("post");
document.body.append(section);

section.append(p);
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";;
p.classList.add("post__content");


section.append(footer);
footer.classList.add("post__footer");


footer.append(span);
span.classList.add("post__username")
span.textContent = "@username";


footer.append(button);
button.classList.add("post__button")
button.textContent = " ♥ Like"
