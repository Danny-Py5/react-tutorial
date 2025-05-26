import { useContext } from "react";
import { layerContext } from "./context/LayerContext.js";
import ThirdLayer from "./ThirdLayer.jsx";

export default function SecondLayer() {
  const { layerData } = useContext(layerContext);

  return (
    <>
      <ul>
        <h2>Second Layer</h2>
        <li>{layerData.name}</li>
      </ul>
      <ThirdLayer />
    </>
  );
}
