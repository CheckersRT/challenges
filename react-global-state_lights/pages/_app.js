import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { use, useState } from "react";

const initialLights = [
  {id: 1, name: "Living Room" ,isOn: false}, 
  {id: 2, name: "Kitchen" ,isOn: false}, 
  {id: 3, name: "Bedroom" ,isOn: false}, 
  {id: 4, name: "Bathroom" ,isOn: false}, 
  {id: 5, name: "Garage" ,isOn: false}, 
  {id: 6, name: "Porch" ,isOn: false}, 
  {id: 7, name: "Garden" ,isOn: false}, 
  {id: 8, name: "Office" ,isOn: false}, 
]

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [$isDimmed, setIsDimmed] = useState(false)
  const sumOfOnLights = lights.filter(light => light.isOn === true).length
  console.log(sumOfOnLights);

  function handleToggle(id) {
    setLights(lights.map((light) => light.id === id ? {...light, isOn: !light.isOn} : light))
  }

  function handleAllOff() {
    setLights(lights.map(light => ({...light, isOn: false})));
    setIsDimmed(true)
  }

  function handleAllOn() {
    setLights(lights.map(light => ({...light, isOn: true})))
  }

  return (
    <Layout isDimmed={$isDimmed}>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} onToggle={handleToggle} sumOfOnLights={sumOfOnLights} allOff={handleAllOff} allOn={handleAllOn}/>
    </Layout>
  );
}
