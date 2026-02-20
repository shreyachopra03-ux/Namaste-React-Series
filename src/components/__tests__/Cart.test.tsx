import Cart from "../Cart";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import browserRouter from "react-router-dom";


// dummy fetch fn
(globalThis as any).fetch = jest.fn(() => 
     Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("should load Restaurant Menu Component", async() => {
   await act(async() => render (
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
   <RestaurantMenu/>
   <Cart/>
   </Provider>
   </BrowserRouter>
   ));

   const accordionHeader = screen.getByText("Recommended (20)");
   fireEvent.click(accordionHeader);

   const foodItems = screen.getAllByTestId("foodItems").length;
   expect(foodItems).toBe(20);

   expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

   const addBtns = screen.getAllByRole("button", { name: "Add +" });
   fireEvent.click(addBtns[0] as HTMLElement);

   expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

   fireEvent.click(addBtns[1] as HTMLElement);
   
   expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

   expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Your cart is empty You can go to the home page to view more restaurants❤️")).toBeInTheDocument();

});