import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { ContextProvider } from "../AppContext";

const mockContextProps = {
  cartData: [],
  addToCart: jest.fn(),
  refetchCart: jest.fn(),
  showAlertSuccess: jest.fn(),
  showAlertError: jest.fn(),
};

const renderWithAppContext = (ui, { contextValue, ...options } = {}) => {
  const value = { ...mockContextProps, ...contextValue };
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <ContextProvider {...value}>{ui}</ContextProvider>
    </Router>,
    options
  );
};

export { mockContextProps, renderWithAppContext };
