import { layerContext } from "./context/LayerContext.js";
import { useContext } from "react";

export default function ThirdLayer() {
  const { layerData } = useContext(layerContext);
  return (
    <>
      <ul>
        <h2>Third Layer</h2>
        <li>{layerData.name}</li>
      </ul>
    </>
  );
}
