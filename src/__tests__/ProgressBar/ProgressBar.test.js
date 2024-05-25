import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProgressBar from "../../pages/ProgressBar/ProgressBar";

describe("ProgressBar component test", () => {
beforeEach(()=>{
    render(<ProgressBar />);
})

  it("Progress bar page is visible", () => {
   
    expect(screen.getByText("Progress Bar")).toBeInTheDocument();
  });
  it("search bar functionality", () => {
    // render(<ProgressBar />);
    const searchBar = screen.getByPlaceholderText("progress");
    fireEvent.change(searchBar, { target: { value: "50" } });
    expect(searchBar.value).toBe("50");
  });
});
