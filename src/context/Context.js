import { createContext } from 'react';
import React from 'react';

const Cart = createContext();

export const Context = ({ children }) => {
  return <Cart.Provider> {children} </Cart.Provider>;
};
