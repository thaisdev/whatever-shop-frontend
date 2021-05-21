import { ContextProvider } from "../GlobalContext";

const mockContextProps = {
  cartData: [],
  addToCart: jest.fn(),
  refetchCart: jest.fn(),
  showAlertSuccess: jest.fn(),
  showAlertError: jest.fn(),
};

const MockWithAppContext = ({ children, contextOptions }) => {
  const contextProps = { ...mockContextProps, ...contextOptions };
  return <ContextProvider {...contextProps}>{children}</ContextProvider>;
};

export { mockContextProps, MockWithAppContext };
