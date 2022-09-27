import { createContext, useContext } from "react";

export const AppContext = createContext();

export function appContext() {
  return useContext(AppContext);
}
