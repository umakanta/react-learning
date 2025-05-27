
import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../Compnent/Counter"

describe("Counter Component", () => {
    // When render page - Cont val - 0
    test("render initial count of 0", () => {
        render(<Counter />);
        const counterText = screen.getByText("Counter: 0");
        expect(counterText).toBeInTheDocument();
    })

    // when click Increment: couter should be 1
    test("Increment clicked: counter value should be changed to 1", () => {
        render(<Counter />)
        const counterText = screen.getByText("Counter: 0");
        expect(counterText).toBeInTheDocument();

        //click increment
        const incrementBtn = screen.getByText("Increment")
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);

        const updatedCounterText = screen.getByText("Counter: 2");
        expect(updatedCounterText).toBeInTheDocument();

    })

    // when click decrement: couter should be 0
    test("Decrement clicked: counter value should be changed to 0", () => {
        render(<Counter />)
        const counterText = screen.getByText("Counter: 0");
        expect(counterText).toBeInTheDocument();

        //click increment
        const decrementBtn = screen.getByText("Decrement")
        fireEvent.click(decrementBtn);

        const updatedCounterText = screen.getByText("Counter: 0");
        expect(updatedCounterText).toBeInTheDocument();

    })

    // when click reset: Count value=0
    test("Reset clicked: counter value should be changed to 0", () => {
        render(<Counter />)
        const counterText = screen.getByText("Counter: 0");
        expect(counterText).toBeInTheDocument();

        const incrementBtn = screen.getByText("Increment")
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);
        const updatedCounterText1 = screen.getByText("Counter: 4");
        expect(updatedCounterText1).toBeInTheDocument();

        const decrementBtn = screen.getByText("Decrement")
        fireEvent.click(decrementBtn);
        const updatedCounterText2 = screen.getByText("Counter: 3");
        expect(updatedCounterText2).toBeInTheDocument();

        //click reset
        const resetBtn = screen.getByText("Reset")
        fireEvent.click(resetBtn);

        const updatedCounterText = screen.getByText("Counter: 0");
        expect(updatedCounterText).toBeInTheDocument();

    })
})
