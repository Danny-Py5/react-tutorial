import { createContext } from "react";

export const layerContext = createContext({
  id: 0,
  name: "",
  age: 0,
  likes: 0,
  setLayerData: () => {},
});
