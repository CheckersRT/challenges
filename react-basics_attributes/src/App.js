import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleComponent/>;
}

function ArticleComponent() {
  return <article className="article">
    <h2 className="aritcle__title">What&apos;s the funniest word in the English language?</h2>
    <label htmlFor="input"></label>
    <input id="input"></input>
    <a className="article__link" href="https://www.ef.com/wwen/blog/language/funniest-words-in-english/">Find out here!</a>
  </article>
}