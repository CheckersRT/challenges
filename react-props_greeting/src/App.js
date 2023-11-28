import "./styles.css";

export default function App() {
  return <Greeting name="Klaus"/>;
}

function Greeting({name}) {
 return <h1>Hello, {name === "Klaus" ? "Klaus" : "Coach"}!</h1>
}