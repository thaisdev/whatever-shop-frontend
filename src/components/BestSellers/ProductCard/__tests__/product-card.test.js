import { fireEvent } from "@testing-library/react";
import ProductCart from "../";
import { renderWithAppContext } from "../../../_context/__mock-data__/app-context-mock";

const productMock = {
  id: 1,
  name: "Product Name",
  image: "image.jpg",
  price: 100,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  deliveryDays: 1,
};

const MockProduct = (props) => (
  <ProductCart product={{ ...productMock, ...props }} />
);

describe("renders card", () => {
  it("should be render card", () => {
    const { getByTestId } = renderWithAppContext(<MockProduct />);
    const card = getByTestId("productCard");
    expect(card).toBeInTheDocument();
  });
});

describe("renders product not added in cart", () => {
  it("should be render add button", () => {
    const { getByRole } = renderWithAppContext(<MockProduct />);
    const button = getByRole("button", {
      name: /adicionar ao carrinho/i,
    });
    expect(button).toBeInTheDocument();
  });
});

describe("renders product added in cart", () => {
  it("should not be render add button", () => {
    const { getByRole } = renderWithAppContext(<MockProduct />, {
      contextProps: {
        cartData: [
          { ...productMock, quantity: 1, totalPrice: productMock.price },
        ],
      },
    });
    const inputQtd = getByRole("spinbutton", {
      value: 1,
    });
    expect(inputQtd).toBeInTheDocument();
  });
});
