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
        <div className="w-full flex justify-center">
        {/* Accordion container */}
        <div className="w-full bg-white mx-auto md:w-8/12 shadow-sm p-4 my-4 border-b-8 border-gray-100 last:border-b-0">
        {/* Accordion Header */}
        <div 
        className="flex justify-between cursor-pointer items-center p-4 hover:bg-gray-50 transition-all" 
        onClick={handleClick}
        >
            <span className="font-bold font-sans text-gray-800 text-sm md:text-lg">
                {data?.title} ({data?.itemCards?.length})
            </span>
            <span className={`transition-transform duration-300 ${showItems ? "rotate-180" : ""}`}>
               ⬇️
            </span>
        </div>
            
            {/* Accordion Body */}
            <div className="overflow-hidden">
            {showItems && <ListItem items={data?.itemCards || []} />}
            </div>
            
        </div>
         </div>

    );
};

export default RestaurantCategory;