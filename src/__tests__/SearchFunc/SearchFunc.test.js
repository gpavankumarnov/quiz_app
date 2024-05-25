import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchFunc from "../../pages/searchFunc/SearchFunc.js";
import useSearch from "../../components/customHooks/Search/useSearch";
//This line tells Jest to replace the actual implementation of useSearch with a mock implementation during the test.
//allowing you to control its behavior during the test.
jest.mock("../../components/customHooks/Search/useSearch.js");

describe('SearchFunc component', ()=>{

beforeEach(() => {
     // Mock the implementation of the useSearch hook
     useSearch.mockReturnValue([
        { name: "John Doe" },
        { name: "Jane Doe" },
        // Add more sample data as needed
      ]);
    render(<SearchFunc/>)
})

test('input field search test', () => {
    const searchField = screen.getByPlaceholderText('search');
    fireEvent.change(searchField, {target: {value: "Abhishek"}})
    expect(searchField.value).toEqual('Abhishek')

})

test("renders the list based on the search data", () => {
    // Assert that the input field is present
    const searchInput = screen.getByPlaceholderText("search");
    expect(searchInput).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(searchInput, { target: { value: "John" } });

    // Assert that the list items are rendered based on the mock data
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2); // Assuming only "John Doe" matches the search
    expect(listItems[0]).toHaveTextContent("John Doe");
  });



})