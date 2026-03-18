import ListItem from "./ListItem";
import { useState } from "react";

type Props = {
    data: any;
    showItems: boolean; 
    setShowIndex: any
};

const RestaurantCategory= ({ data, showItems, setShowIndex }:Props) => {
  
    const handleClick = () => {
        setShowIndex();
    }

    return (
         <div>
            {/* Accordion Header */}
        <div className="mx-auto w-[95%] md:w-8/12 bg-gray-50 shadow-lg p-4 my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-semibold text-md">{data?.title} ({data?.itemCards?.length})</span>
            <span className="">⬇️</span>
        </div>
            
            {/* Accordion Body */}
            {showItems && <ListItem items={data?.itemCards || []} />}
        </div>
         </div>

    );
};

export default RestaurantCategory;