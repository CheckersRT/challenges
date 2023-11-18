import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) => card.categories.includes("politics"));
console.log(filteredNews);

// Part 2 - start here
const sortedNews = filteredNews.slice().sort((a, b) => {
  const bodyA = a.body.length;
  const bodyB = b.body.length;

  if(bodyA > bodyB) {
    return 1;
  } else if (bodyA < bodyB) {
    return -1;
  } return 0;
})

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
