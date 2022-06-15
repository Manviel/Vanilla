import React, { createContext, useReducer, useMemo } from 'react';

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, data: action.payload };
    case 'auth':
      return { ...state, isAllowed: action.payload };
    default:
      return { ...state };
  }
};

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, { data: [], isAllowed: false });

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
