import { render } from "@testing-library/react";
import { ContextProvider } from "../AppContext";

const mockContextProps = {
  cartData: [],
  addToCart: jest.fn(),
  refetchCart: jest.fn(),
  showAlertSuccess: jest.fn(),
  showAlertError: jest.fn(),
};

const renderWithAppContext = (ui, { contextProps, ...options } = {}) => {
  const value = { ...mockContextProps, ...contextProps };
  return render(<ContextProvider {...value}>{ui}</ContextProvider>, options);
};

export { mockContextProps, renderWithAppContext };
