import SecondLayer from "./SecondLayer.jsx";
import { layerContext } from "./context/LayerContext.js";
import { useContext } from "react";

export default function FirstLayer() {
  const { layerData, loading } = useContext(layerContext);
  return (
    <>
      <ul>
        <h2>FIrst Layer</h2>
        <li>
          <strong>
            First Layer and access Name:{" "}
            {loading ? "Loading..." : layerData.name} from the context provider
          </strong>
        </li>
        <li>
          <strong>
            First Layer and access Age: {layerData.age} from the context
            provider
          </strong>
        </li>
      </ul>
      <SecondLayer />
    </>
  );
}
