import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>

    const restaurantInfo = resInfo?.cards
    ?.map((c: any) => c?.card?.card?.info)
    ?.find((info: any) => info?.name);

    const regularCards = resInfo?.cards
    ?.find((c: any) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuItems = 
     regularCards
    ?.filter((c: any) => c?.card?.card?.itemCards)
    ?.flatMap((c: any) => c.card.card.itemCards);

    // console.log(regularCards);

    const categories = regularCards?.filter((c:any) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

    return (
    <div className="menu text-center">
        <h1 className="font-bold my-6 -ml-176 text-2xl">{name}</h1>
        <p className="text-gray-500 -mt-4 -ml-170 font-semibold text-sm">
            {cuisines?.join(', ')} - {costForTwoMessage}
        </p>
       <div className="h-px w-full bg-gray-200 my-5"></div>
        <div className="flex flex-col items-center w-full min-h-screen pb-60 md:pb-0">
            
            {/* categories accordion */}
            {categories?.map((category:any, index:any) => (
                // THIS IS A CONTROLLED COMPONENT
                <RestaurantCategory 
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    </div>
    );
};
export default RestaurantMenu;