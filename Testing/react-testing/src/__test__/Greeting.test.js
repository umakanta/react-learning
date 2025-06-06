import { render, screen } from "@testing-library/react"
import Greeting from "../Compnent/Greeting"

// the render() function takes a React component as an argument and 
// renders it into a virtual DOM.

// The screen.getByText() function is a query function provided by React Testing Library
//  that is used to find an element in the rendered component based on its text content.

// when a name prop is not provided
test("Test when name prop is not provided", () => {
    //render  a greeting component 
    render(<Greeting />);

    const greetingElement = screen.getByText("Hello world ! How are you doing ?")

    expect(greetingElement).toBeInTheDocument();
})

test("Test when name prop is provided", () => {
    //render  a greeting component 
    render(<Greeting name="John"/>);

    const greetingElement = screen.getByText("Hello, John ! How are you doing ?")

    expect(greetingElement).toBeInTheDocument();
})