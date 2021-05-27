import { render, fireEvent } from "@testing-library/react";
import QuantityItemCard from "..";
import * as AppContext from "../../_context/AppContext";

let mockContextProps = {
  cartData: [],
  addToCart: jest.fn(),
  refetchCart: jest.fn(),
  showAlertSuccess: jest.fn(),
  showAlertError: jest.fn(),
};

const productMock = {
  id: 1,
  name: "Product Name",
  image: "image.jpg",
  price: 100,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  deliveryDays: 1,
  quantity: 1,
};

const MockQuantity = (props) => (
  <QuantityItemCard product={{ ...productMock, ...props }} />
);

beforeEach(() => {
  jest
    .spyOn(AppContext, "useAppContext")
    .mockImplementation(() => mockContextProps);
  jest.mock("axios-hooks", () => [{}, () => Promise.resolve({ status: 200 })]);
});

describe("renders quantity", () => {
  it("should be render quantity input with 1", () => {
    const { getByRole } = render(<MockQuantity />);
    const quantityInput = getByRole("spinbutton", { type: "number" });
    expect(quantityInput).toHaveValue(productMock.quantity);
  });
});

describe("add 1 to quantity", () => {
  it("should be render quantity input with quantity+1", () => {
    const { getByRole } = render(<MockQuantity />);
    const addButton = getByRole("button", { name: /add quantity/i });
    const quantityInput = getByRole("spinbutton", { type: "number" });
    fireEvent.click(addButton);
    setTimeout(() => {
      expect(quantityInput).toHaveValue(productMock.quantity + 1);
    }, 1000);
  });
});

describe("remove 1 from quantity", () => {
  it("should be render quantity input with quantity-1", () => {
    const { getByRole } = render(
      <MockQuantity quantity={productMock.quantity + 1} />
    );
    const removeButton = getByRole("button", { name: /remove quantity/i });
    const quantityInput = getByRole("spinbutton", { type: "number" });
    fireEvent.click(removeButton);
    setTimeout(() => {
      expect(quantityInput).toHaveValue(productMock.quantity + 1);
    }, 1000);
  });
});
