import { render } from "@testing-library/react";
import QuantityItemCard from "..";
import * as AppContext from "../../_context/AppContext";
import { mockContextProps } from "../../_context/__mock-data__/app-context-mock";

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
});

describe("renders quantity", () => {
  it("should be render quantity input with 1", () => {
    const { getByRole } = render(<MockQuantity />);
    const quantityInput = getByRole("spinbutton", { type: "number" });
    expect(quantityInput).toHaveValue(productMock.quantity);
  });
});
