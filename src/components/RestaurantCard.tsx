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
      <div data-testid="resCard" className="m-4 p-4 w-62.5 bg-orange-100 hover:bg-orange-200 rounded-lg">
        <img className="rounded-lg" alt="res-logo" src={CDN_URL + info.cloudinaryImageId}/>
        <h4 className="font-bold py-4 text-lg">{info.name}</h4>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.avgRating}⭐</h4>
        <h4>{info.costForTwo}</h4>
        <h4>{info.sla.deliveryTime} mins</h4>
        <h4>User: { loggedInUser }</h4>

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
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
      <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;