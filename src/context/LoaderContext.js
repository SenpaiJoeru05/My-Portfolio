import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Start with loader visible on initial load

  const showLoader = (callback) => {
    setIsLoading(true);
    return () => setIsLoading(false); // Callback when loader finishes
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);