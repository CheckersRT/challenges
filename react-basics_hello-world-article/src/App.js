import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}

function HelloWorldArticle() {
  return <article>
    <h1>What actually are buttons?</h1>
    <p>Nobody really knows.</p>
    <button>Click me, I&apos;m a button</button>
  </article>
}