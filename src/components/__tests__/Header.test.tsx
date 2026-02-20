import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

test("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={ appStore }>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    //  One way if there are multiple buttons & we want to find specific one
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Second way
    // const loginButton = screen.getByText('login');

    // Assertion
    expect(loginButton).toBeInTheDocument();

})

test("Should render Header Component with 0 Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={ appStore }>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    // Assertion
    expect(cartItems).toBeInTheDocument();
});

test("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={ appStore }>
        <Header />
        </Provider>
        </BrowserRouter>
    );
    
    // we can use regex also to text component
    const cartItems = screen.getByText(/cart/);

    // Assertion
    expect(cartItems).toBeInTheDocument();
});