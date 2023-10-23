import React, { createContext, useState } from "react";
const initialState = {};
export const SearchContext = createContext(initialState);

const SearchContextProvider = ({ children }) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [screenOptions, setScreenOptions] = useState([]);
  const updateSearchStatus = newStatus => {
    setSearchStatus(newStatus);
  };
  const enterScreens = screens => {
    setScreenOptions(screens);
  }
  return (
    <SearchContext.Provider value={{ searchStatus, updateSearchStatus, screenOptions, enterScreens }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
