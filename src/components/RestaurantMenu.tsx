import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState<any>(null);

    const { resId } = useParams();
 
    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data);
        console.log("API URL =>", MENU_API + resId);

    };

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


    const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>

     <ul>
  {menuItems?.map((item: any, index:number) => (
    <li key={index}>
      {item.card.info.name} – {'Rs.'}
      {(item.card.info.price || item.card.info.defaultPrice) / 100}
    </li>
  ))}
</ul>

        </div>
    );
};

export default RestaurantMenu;