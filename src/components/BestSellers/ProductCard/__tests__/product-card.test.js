import { render, screen } from "@testing-library/react";
import ProductCart from "../../ProductCard";
import { ContextProvider } from "../../../_context/GlobalContext";

const productMock = {
  id: 1,
  name: "Product Name",
  image: "image.jpg",
  price: 100,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  deliveryDays: 1,
};

const MockWithContext = () => {
  const contextProps = {
    cartData: [],
    addToCart: jest.fn(),
    refetchCart: jest.fn(),
    showAlertSuccess: jest.fn(),
    showAlertError: jest.fn(),
  };

  return (
    <ContextProvider {...contextProps}>
      <ProductCart product={productMock} />
    </ContextProvider>
  );
};

describe("renders card", () => {
  it("should be render card", () => {
    render(<MockWithContext />);
    const card = screen.getByTestId("productCard");
    expect(card).toBeInTheDocument();
  });
});
