import { useContext } from "react";
import { layerContext } from "./context/LayerContext.js";
import ThirdLayer from "./ThirdLayer.jsx";

export default function SecondLayer() {
  const { layerData } = useContext(layerContext);

  return (
    <>
      <ul>
        <h2>Second Layer</h2>
        <li>
          <strong>
            Second Layer can access Age: {layerData.age} from the context
            provider
          </strong>
        </li>
        <li>
          <strong>
            Second Layer can access name: {layerData.name} from the context
            provider
          </strong>
        </li>
      </ul>
      <ThirdLayer />
    </>
  );
}
