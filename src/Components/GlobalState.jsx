import { createContext, useState } from "react";

export const RootContext = createContext();

const GlobalState = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <RootContext.Provider value={{ token, setToken }}>
      {children}
    </RootContext.Provider>
  );
};

export default GlobalState;
