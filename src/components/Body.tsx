import RestaurantCard, { OpenOrNot } from "./RestaurantCard";
import RestaurantData from "../utils/restaurantData.json";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

type Restaurant = {
    info: {
        id: string;
        name: string;
        cuisines: string[];
        avgRating: number;
        cloudinaryImageId: string;
        isOpen: boolean;
        costForTwo: string;
        sla: {
            deliveryTime: number;
        };
    };
};

const Body = () => {
    //Local State Variable -> super power variable
    // <Restaurant[]> => iska mtlb hai ki jo bhi value aayegi vo Restaurant type ke objects ka ARRAY hoga
    // ([]) => intial value mtlb starting mei koi restaurant nhi hai

    const [listOfRestaurants, setlistOfRestaurants] = useState<Restaurant[]>([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState<Restaurant[]>([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardAvailable = OpenOrNot(RestaurantCard);
   
    // whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)
    // console.log("Body Rendered", listOfRestaurants);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://foodfire.onrender.com/api/restaurants?lat=28.60090200875999&lng=77.08098202943802&page_type=DESKTOP_WEB_LISTING",
                );

                const json = await res.json();

                // Optional Chaining
                const cards = json?.data?.cards || [];

                const restaurantCard = cards.find(
                    (card: any) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
                );

                const restaurants =
                    restaurantCard?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants || [];

                setlistOfRestaurants(restaurants);
                setFilteredRestaurant(restaurants);
                 } catch (err) {
                console.log(err);
                setlistOfRestaurants(RestaurantData.resList);
                 }
        };

        fetchData();
    }, []);


     const onlineStatus = useOnlineStatus();
     if( onlineStatus === false ) 
        return (
          <h1>
            Looks like your're offline ! Please Check your internet connection !!
          </h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

    // This is Conditional Rendering -> rendering on the basis of any condition
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body min-h-screen pb-50 md:pb-0 pt-2">
            <div className="filter flex justify-center items-center py-4 flex-col pt-2">
                <div className="mt-2 md:mt-0 search flex items-center bg-white shadow-sm border border-gray-100 rounded-full py-1 w-full max-w-sm px-4">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="mt-3 md:mt-0 grow px-2 py-2 focus:outline-none outline:none bg-transparent placeholder-gray-500 text-md"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}   
                    />
                    <div className="h-7 w-0.5 bg-gray-200 mx-2"></div>
                    <button
                     className="px-2 py-2 font-bold text-gray-800 text-sm"
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                                // console.log(searchText);

                            const filteredRestaurants =
                                listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase()),
                                );
                            // console.log(filteredRestaurants);
                            setFilteredRestaurant(filteredRestaurants);
                        }}>
                    Search
                    </button>
                </div>

             
            </div>

            <div className="flex flex-wrap justify-center min-h-screen pb-20">
                {filteredRestaurant.map((restaurant) => {
                    return (
                    <div
                    className="flex"
                     key={restaurant.info.id}>
                    {restaurant.info.isOpen ? (
                        <RestaurantCardAvailable resData={restaurant} />
                    ) : (
                        <RestaurantCard resData={restaurant} />
                    )}
                    </div>
                    );
                    })}
            </div>
        </div>
    );
};

export default Body;
