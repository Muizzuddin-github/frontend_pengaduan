import { createContext, useState } from "react";

export const RootContext = createContext();

const GlobalState = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <RootContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </RootContext.Provider>
  );
};

export default GlobalState;
