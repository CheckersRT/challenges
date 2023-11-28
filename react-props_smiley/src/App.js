import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} isLaughing={true} />;
}

function Smiley({ isHappy, isLaughing }) {
  return (
    <div>
      <span>{isHappy ? (isLaughing ? ":D" : ":)") : ":("}</span>
      <p>Lol</p>
    </div>
  );
}
