import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store:any) => store.cart.items)
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-semibold">Cart</h1>
        
        <div className="w-6/12 m-auto">   
        {cartItems.length > 0 && (
             <button className="rounded-md px-5 py-1 m-2 text-sm text-white bg-orange-500"
               onClick={handleClearCart}>
                Clear Cart
            </button>
        )}   
        {cartItems.length == 0 && (
            <>
            <h1 className="md:mt-4 font-mono m-7 text-sm">Your cart is empty 😔
            <br/>
            </h1>
            <h1 className="md:-mt-8 font-mono m-7 text-sm">
            Explore restaurants and add some delicious items to your cart❤️
            </h1>
            </>
        )} 
            <button className="-mt-6 p-2 text-sm font-semibold -my-4 rounded-md text-white bg-orange-500 cursor-pointer">
                <Link to="/">See restaurants near you</Link>
            </button>
            
            <ListItem items={cartItems} />
        </div>
        </div>
    )
};
export default Cart;