import { render } from "@testing-library/react";
import { MockProduct } from "../__mock-data__";

describe("renders card", () => {
  it("should be render card", () => {
    const { getByTestId } = render(<MockProduct />);
    const card = getByTestId("productCard");
    expect(card).toBeInTheDocument();
  });
});
