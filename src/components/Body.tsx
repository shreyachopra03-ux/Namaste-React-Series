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
import logoIcon from "url:../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
            <div className="-mt-3.5 flex flex-col bg-[#fff9f2] w-screen h-105">
                <div className="flex flex-col items-center mx-auto gap-2 mt-8">
                <span className="font-semibold text-2xl md:text-5xl">Delicious Food</span>
                <span className="font-semibold text-2xl md:text-5xl text-orange-600">Delivered to You</span>
                <span className="text-gray-700 md:text-lg mt-2">Order from your favorite restaurants and get it delivered fresh at your doorstep in <br/><span className="md:text-lg flex items-center justify-center"> minutes</span></span>
                </div>
                <div className="mx-auto flex gap-20 mt-10">
                {/* Restaurants Section */}
                <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-semibold text-2xl">500+</span>
                    <span className="text-gray-700 font-normal text-base">Restaurants</span>
                </div>

                {/* Dishes Section */}
                <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-semibold text-2xl">10k+</span>
                    <span className="text-gray-700 font-normal text-base">Dishes</span>
                </div>

                {/* Users Section */}
                <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-semibold text-2xl">50k</span>
                    <span className="text-gray-700 font-normal text-base">Happy Users</span>
                </div>
                </div>
            </div>
            <div className="text-gray-800 font-semibold text-center pl-6 mt-5 text-2xl">
                Browse By Category
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
                     className="px-2 py-2 font-bold text-gray-900 text-sm"
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

        {/* Footer Section */}
            <footer className="w-full bg-white pt-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-row justify-between items-start pb-10">
      
            <div className="flex flex-col gap-4 md:-mt-7 md:mx-18 -ml-10">
            <img 
            src={logoIcon} 
            className="md:w-32 w-25 h-auto" 
            alt="logo"
            />
        
        <div className="flex gap-4 -mt-7 mx-7">
           <div className="bg-slate-800 p-2 rounded-full text-white cursor-pointer hover:bg-slate-700">
            <FaTwitter size={10} />
            </div>
            <div className="bg-slate-800 p-2 rounded-full text-white cursor-pointer hover:bg-slate-700">
            <FaFacebookF size={10} />
            </div>
            <div className="bg-slate-800 p-2 rounded-full text-white cursor-pointer hover:bg-slate-700">
            <FaInstagram size={10} />
            </div>
           </div>
        </div>

        <div className="flex gap-120">
        <div className="-mr-80">
        <h4 className="text-gray-400 font-bold text-xs md:mb-4 md:-ml-155 tracking-widest -ml-20">COMPANY</h4>
          <ul className="text-gray-900 space-y-2 text-sm md:-ml-155 -ml-18 mt-2.5 md:mt-0">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Works</li>
            <li className="cursor-pointer">Career</li>
          </ul>
        </div>

        <div className="-mr-70 hidden md:block">
          <h4 className="text-gray-400 font-bold text-xs md:mb-4 md:-ml-155 tracking-widest hidden md:block">HELP</h4>
          <ul className="text-gray-900 space-y-2 text-sm -ml-155">
            <li className="cursor-pointer">Customer Support</li>
            <li className="cursor-pointer">Delivery Details</li>
            <li className="cursor-pointer">Terms & Conditions</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="-mr-60">
        <h4 className="text-gray-400 font-bold text-xs md:mb-4 md:mr-40 md:-ml-155 tracking-widest hidden md:block">AVAILABLE in :</h4>
          <ul className="text-gray-900 space-y-2 text-sm -ml-155 hidden md:block">
            <li className="cursor-pointer">Delhi</li>
            <li className="cursor-pointer">Gurgaon</li>
            <li className="cursor-pointer">Pune</li>
            <li className="cursor-pointer">Hyderabad</li>
            <li className="cursor-pointer">Bangalore</li>
            <li className="cursor-pointer">Mumbai</li>
          </ul>
        </div>

        </div>
        </div>

        <div className="border-t border-gray-200 md:pt-8 md:pb-8 pt-4">
        <p className="text-gray-500 text-center text-xs">
         © 2026 An attempt at making a Swiggy Clone.
        </p>
        </div>

        </div>
        </footer>
</div>    
    );
};

export default Body;
