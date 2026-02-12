import ListItem from "./ListItem";
import { useState } from "react";

type Props = {
    data: any;
};

const RestaurantCategory= ({ data }:Props) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
       
        setShowItems(!showItems);
    }
  
    return (
         <div>
            {/* Header */}
        <div className="m-auto w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>
        </div>
            
            {/* Accordion Body */}
            {showItems && <ListItem items={data?.itemCards || []} />}
        </div>
         </div>

    );
};

export default RestaurantCategory;