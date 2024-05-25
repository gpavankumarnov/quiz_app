import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";


test("renders APP Test Text", () => {
  render(<App />);
  const Header = screen.getByText(/APP Test/i);
  expect(Header).toBeInTheDocument();
});

test("handleClick func is calling", () => {
  render(<App />);
  const handleClickMock = jest.spyOn(require('./App'), "handleClick");
  const Header = screen.getByText(/ADD/i);
  fireEvent.click(Header);
  expect(handleClickMock).toHaveBeenCalled();
  expect(handleClickMock).toHaveBeenTimes(1);
});
