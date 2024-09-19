import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/route1/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const deployNow = screen.getByText("Deploy now");

    expect(deployNow).toBeInTheDocument();
  });
});
