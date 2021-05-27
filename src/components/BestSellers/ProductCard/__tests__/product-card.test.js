import ProductCart from "..";
import { formatCurrency } from "../../../../utils/formatHelper";
import { renderWithAppContext } from "../../../_context/__mock-data__/app-context-mock";

const IMAGES_FOLDER = "images";

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

describe("renders product info", () => {
  it("should be render card with product image", () => {
    const { getByTitle } = renderWithAppContext(<MockProduct />);
    const backgroundImage = getByTitle(productMock.name);
    expect(backgroundImage).toHaveStyle(
      `background-image: url(${IMAGES_FOLDER}/${productMock.image})`
    );
  });

  it("should be render card with product name", () => {
    const { getByText } = renderWithAppContext(<MockProduct />);
    const productName = getByText(productMock.name);
    expect(productName).toBeInTheDocument();
  });

  it("should be render card with formated price", () => {
    const { getByTestId } = renderWithAppContext(<MockProduct />);
    const productPrice = getByTestId("productPrice");
    expect(productPrice.textContent).toBe(formatCurrency(productMock.price));
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
    const { queryByRole } = renderWithAppContext(<MockProduct />, {
      contextValue: {
        cartData: [
          { ...productMock, quantity: 1, totalPrice: productMock.price },
        ],
      },
    });
    const button = queryByRole("button", {
      name: /adicionar ao carrinho/i,
    });
    expect(button).not.toBeInTheDocument();
  });
});
