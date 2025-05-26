import SecondLayer from "./SecondLayer.jsx";
import { layerContext } from "./context/LayerContext.js";
import { useContext } from "react";

export default function FirstLayer() {
  let { layerData } = useContext(layerContext);

  return (
    <>
      <ul>
        <h2>FIrst Layer</h2>
        <li>Id: {layerData.id}</li>
        <li>Name: {layerData.name}</li>
        <li>Username: {layerData.age}</li>
        <li>Email: {layerData.likes} </li>
      </ul>

      <SecondLayer />
    </>
  );
}
