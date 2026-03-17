import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

type RestaurantCardProps = {
  resData: {
    info: {
        id: string;
      name: string;
      cuisines: string[];
      avgRating: number;
      cloudinaryImageId: string;
      costForTwo: string;
      sla: {
        deliveryTime: number;
      }
    }
  }
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const {info} = props.resData;
  const {id} = props.resData.info;

   console.log("resData:", props.resData);

  const { loggedInUser } = useContext(UserContext);
  return (
    <Link to={`/restaurants/${id}`} className="restaurant-card-link">
      <div 
      data-testid="resCard" 
      className="mt-4 md:mt-0 p-4 w-65 min-h-80 border border-gray-300 flex flex-col md:m-4 bg-white hover:scale-105 transition ease-out shadow-md rounded-lg justify-center items-center">
        <img 
        className="-mt-1.5 rounded-lg h-40 w-full object-cover" 
        alt="res-logo" 
        src={CDN_URL + info.cloudinaryImageId}
        />
        <div className="flex flex-col grow">
        <h4 className="font-bold py-2 text-md justify-center items-center flex text-sm -mt-1 m-0 text-center">{info.name}</h4>
        <h4 className="text-black text-xs mx-auto -mt-1 text-center items-center">{info.cuisines.join(", ")}</h4>
        <h4 className="mx-auto text-black text-xs mt-1">{info.avgRating}⭐</h4>
        <h4 className="text-xs text-black mx-auto mt-1">{info.costForTwo}</h4>
        <h4 className="text-xs text-black mx-auto mt-1">{info.sla.deliveryTime} mins</h4>
        </div>

        {/* <h4>User: { loggedInUser }</h4> */}
        </div>
    
    </Link>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardAvailable

export const OpenOrNot = (RestaurantCard:any) => {
  console.log("OpenOrNot:", RestaurantCard);

  return (props:any) => {
    return (
      <div className="relative">
        <label className="absolute top-6 left-6 z-20 bg-black text-white m-2 px-3 py-1 rounded-md text-xs font-semibold shadow-md pointer-cursor">
          Open
        </label>
      <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;