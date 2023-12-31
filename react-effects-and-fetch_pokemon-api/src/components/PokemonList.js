import { useState, useEffect } from "react";
import vision from "@google-cloud/vision"


export default function PokemonList() {
  const [answer, setAnswer] = useState([]);
  let extractedString = "";
  
  
  useEffect(() => {
    let extractedText = [];
    async function getTextFromImage() {
      try {
          const client = new vision.ImageAnnotatorClient();
      
          const fileName = "public/IMG_7482.jpg";
      
          const [result] = await client.textDetection(fileName);
          const detections = result.textAnnotations;
          console.log(detections);
          detections.forEach((text) => {
          extractedText.push(text.description)
          });
          extractedString = extractedText.toString()
          console.log(extractedString)
          setAnswer(extractedString);
      } catch (error) {
        console.log(error);
      }
    }
    getTextFromImage();
  }, []);

  return (
    <main>
      <p>TEst</p>
      <p>{answer}</p>
      {/* <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}
    </main>
  );
}
