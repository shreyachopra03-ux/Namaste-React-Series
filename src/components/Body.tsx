import RestaurantCard, { OpenOrNot } from "./RestaurantCard";
import RestaurantData from "../utils/restaurantData.json";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import momoIcon from "url:../assets/momos.png";
import pastryIcon from "url:../assets/pastry.png";
import pizzaIcon from "url:../assets/pizza.png";
import northIndianIcon from "url:../assets/NI.png";
import cakeIcon from "url:../assets/cake.png";
import biryaniIcon from "url:../assets/biryani.png";
import burgerIcon from "url:../assets/burger.png";
import cholebhatureIcon from "url:../assets/cholebhature.png";
import dosaIcon from "url:../assets/dosa.png";
import friesIcon from "url:../assets/fries.png";
import icecreamIcon from "url:../assets/icecream.png";
import paranthaIcon from "url:../assets/parantha.png";
import pastaIcon from "url:../assets/pasta.png";
import rasmalaiIcon from "url:../assets/rasmalai.png";
import saladsIcon from "url:../assets/salads.png";
import waffleIcon from "url:../assets/waffle.png";
import shakeIcon from "url:../assets/shake.png";

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
            <div className="text-black font-bold pl-6 text-xl">
                What's on your mind?
                <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar pb-4">
          
                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">    
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={momoIcon} alt="momo icon" className="h-28 w-28 object-contain rounded-full scale-90"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Momos</p>
                     </div>

                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={pastryIcon} alt="pastry icon" className="h-28 w-28 object-contain rounded-full scale-90"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Pastry</p>
                     </div>

                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={pizzaIcon} alt="pizza icon" className="h-28 w-28 object-contain rounded-full scale-90"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Pizza</p>
                     </div>

                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={northIndianIcon} alt="north indian icon" className="h-28 w-28 object-contain rounded-full scale-90"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">North Indian</p>
                     </div>

                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={cakeIcon} alt="cake icon" className="h-28 w-28 object-contain rounded-full scale-95"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Cake</p>
                     </div>

                     <div className="flex-col flex-none items-center w-28 flex cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={biryaniIcon} alt="biryani icon" className="h-28 w-28 object-contain rounded-full scale-95"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Biryani</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={burgerIcon} alt="burger icon" className="h-28 w-28 object-contain rounded-full scale-95"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Burger</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={pastaIcon} alt="pasta icon" className="h-28 w-28 object-contain rounded-full scale-95"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Pasta</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={shakeIcon} alt="shakes icon" className="h-28 w-28 object-contain rounded-full scale-115"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Shakes</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={cholebhatureIcon} alt="chole bhature icon" className="h-28 w-28 object-contain rounded-full scale-100"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Chole Bhature</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={dosaIcon} alt="dosa icon" className="h-28 w-28 object-contain rounded-full scale-100"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Dosa</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={friesIcon} alt="fries icon" className="h-full w-full rounded-full object-contain scale-115"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Fries</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={paranthaIcon} alt="parantha icon" className="h-full w-full rounded-full object-cover scale-100"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Parantha</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={saladsIcon} alt="salad icon" className="h-full w-full rounded-full object-cover scale-120"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Salad</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={waffleIcon} alt="waffle icon" className="h-full w-full rounded-full object-cover scale-120"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Waffle</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={icecreamIcon} alt="ice cream icon" className="h-full w-full rounded-full object-contain scale-90"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Ice Cream</p>
                     </div>

                     <div className="flex-col items-center w-28 flex flex-none cursor-pointer">
                     <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
                     <img src={rasmalaiIcon} alt="rasmalai icon" className="h-full w-full rounded-full object-contain scale-95"/>
                     </div>
                     <p className="text-sm font-normal -mt-1 text-center h-10 flex items-start justify-center">Rasmalai</p>
                     </div>
                </div>
            </div>

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
