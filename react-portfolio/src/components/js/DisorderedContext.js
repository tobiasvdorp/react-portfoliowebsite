import React, { createContext, useState, useContext } from "react";

export const DisorderedContext = createContext();

export const DisorderedProvider = ({ children }) => {
  const [isDisordered, setDisordered] = useState(false);
  return (
    <DisorderedContext.Provider value={{ isDisordered, setDisordered }}>
      {children}
    </DisorderedContext.Provider>
  );
};

export const useDisordered = () => {
  return useContext(DisorderedContext);
};
