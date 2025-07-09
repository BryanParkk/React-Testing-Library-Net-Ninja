import { render, screen } from "@testing-library/react";
import Todo from "../Todo";

describe("Todo", () => {
  it("should render same text passed into title prop", async () => {
    render(<Todo />);
  });
});
