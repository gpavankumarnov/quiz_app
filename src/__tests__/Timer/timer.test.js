import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Timer from "../../pages/Timer/Timer";

describe("timer component test", () => {
  beforeEach(() => {
    render(<Timer />);
  });

  // Mocking timers
  jest.useFakeTimers();
  it("Timer component is rendering", () => {
    expect(screen.getByText("Timer")).toBeInTheDocument();
  });

  it("on start of the timer", () => {
    // Start the timer
    fireEvent.click(screen.getByText("Start"));

    // Advance the timer by 1 second (1000 milliseconds)
    act(() => {
      // Fast forward and exhaust only currently pending timers
      // (but not any new timers that get created during that process)
      jest.runOnlyPendingTimers();
    });

    // Ensure that the timer is incremented
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("1 secs")).toBeInTheDocument();

    // Stop the timer
    fireEvent.click(screen.getByText("Stop"));

    // Advance the timer again (it shouldn't change)
    act(() => {
      jest.runOnlyPendingTimers();
    });

    // Ensure that the timer remains the same
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("1 secs")).toBeInTheDocument();

    // Reset the timer
    fireEvent.click(screen.getByText("Reset"));

    // Ensure that the timer is reset to 0
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("0 secs")).toBeInTheDocument();
  });
});
