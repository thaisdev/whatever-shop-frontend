import ProductCart from "../../ProductCard";
import { MockWithAppContext } from "../../../_context/__mock-data__";

const productMock = {
  id: 1,
  name: "Product Name",
  image: "image.jpg",
  price: 100,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  deliveryDays: 1,
};

const MockProduct = ({ options }) => (
  <MockWithAppContext>
    <ProductCart product={{ ...productMock, ...options }} />
  </MockWithAppContext>
);

export { productMock, MockProduct };
