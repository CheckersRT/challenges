console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2"
});

console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length == 3
});

console.log(allCardsWith3Tags);


const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked == false;
});

// console.log(allCardsThatAreNotBookmarked);

const allCardsThatAreBookmarked = cards.filter(card => card.isBookmarked);

console.log(allCardsThatAreBookmarked);

function hasCardHtmlOrJs(card) {
  for (const tag of card.tags) {
    if (tag === "html" || tag ===  "js") {
      console.log(tag);
      return true
    } 
  } return false
} 

const allCardsWithTagsHTMLOrJSThatAreBookmarked = allCardsThatAreBookmarked.filter(card => {
  return hasCardHtmlOrJs(card);
})

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);


// cards.filter((card) => {
//   return (card.tags[0] == "html" || card.tags[0] == "js") && card.isBookmarked == true;
// });



export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
