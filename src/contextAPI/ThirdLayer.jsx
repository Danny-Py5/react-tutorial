import { layerContext } from "./context/LayerContext.js";
import { useContext } from "react";

export default function ThirdLayer() {
  const { layerData } = useContext(layerContext);
  return (
    <>
      <ul>
        <h2>Third Layer</h2>
        <li>
          <strong>
            Third Layer can access likes: {layerData.likes} from the context
            provider
          </strong>
        </li>
        <li>
          <strong>
            Third Layer can access Age: {layerData.name} from the context
            provider
          </strong>
        </li>
      </ul>
    </>
  );
}
