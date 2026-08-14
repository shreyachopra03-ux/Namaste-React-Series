import { CDN_URL_SMALL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import type { AppDispatch } from "../utils/appStore";

type props = {
    items: any;
}

const ListItem = ({items}: props) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleAddItem = (item:any) => {
        // dispatch an action
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item:any) => {
        dispatch(removeItem(item));
    }

    return (
        <div>
            {items?.map((item:any) => (
            <div 
            data-testid="foodItems"
            key = {item?.card?.info?.id}
            className="p-4 border-gray-200 border-b-2 flex justify-between items-center gap-4 last:border-b-0 hover:bg-gray-50 transition-all">
    
            <div className="flex-1 text-left">
            <div className="pb-1">    
                 <div className="font-bold text-gray-800 text-base md:text-lg">
                 {item?.card?.info?.name}
                 </div>
                 <div className="font-medium text-gray-800">
                    ₹ {item?.card?.info?.price 
                    ? item?.card?.info?.price / 100 
                    : item?.card?.info?.defaultPrice / 100}
                 </div>
            </div>
            <p className="text-[12px] text-gray-600 leading-5">
            {item.card.info.description}
            </p>
            </div>   
            
            
            <div className="relative shrink-0">
                <div className="relative">
                        {item?.card?.info?.imageId ? (
                            <img
                                src={CDN_URL_SMALL + item?.card?.info?.imageId}
                                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-md border border-gray-100"
                                alt={item?.card?.info?.name}
                                loading="eager"
                                decoding="async"
                            />
                        ) : (
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl border border-gray-100 flex items-center justify-center text-[10px] text-gray-400">
                                No Image
                            </div>
                        )}
                        
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            {item?.quantity ? (
                                <div className="flex items-center gap-3 bg-white px-3 py-1 md:px-4 md:py-2 rounded-lg border border-gray-300 shadow-lg whitespace-nowrap">
                                    <button
                                        className="text-green-600 font-extrabold cursor-pointer"
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-800 font-semibold text-xs md:text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="text-green-600 font-extrabold cursor-pointer"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="bg-white text-green-600 font-extrabold px-4 py-1 md:px-8 md:py-2 rounded-lg border border-gray-300 shadow-lg hover:bg-gray-100 transition-colors uppercase text-xs md:text-sm whitespace-nowrap"
                                    onClick={() => handleAddItem(item)}
                                >
                                Add
                                </button>
                            )}
                        </div>
                </div>
            </div>
        </div>
            ))}
        </div>    
    );
};  
export default ListItem;