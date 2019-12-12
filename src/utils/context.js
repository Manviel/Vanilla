import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const Store = props => {
  const [state, dispatch] = useReducer(reducer, { data: [] });

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
