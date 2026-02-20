import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should have RestaurantCard Component with props Data", () => {
    render(
    <BrowserRouter>   
    <RestaurantCard resData={ MOCK_DATA } />
    </BrowserRouter>
    );
    
    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
});