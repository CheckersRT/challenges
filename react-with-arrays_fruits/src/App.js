import Card from "./components/Card";
import { fruits } from "./lib/fruits.js";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} />;
      })}
    </div>
  );
}
