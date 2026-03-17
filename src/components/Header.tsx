// This is how we write a 'named import'
import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');
  // console.log('header rendered');

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
   
  // Subscribing to the store using a Selector (hook)
  const cartItems = useSelector((store:any) => store.cart.items);

  // vvvv imp interview ques :
  // if no dependency array => useEffect is called on every component render 
  // if dependency array is empty [] => useEffect is called on initial render (just once)
  // if dependency array is {btnNameReact} => called everytime btnNameReact is updated
  
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="py-3 m-3 md:py-0 rounded-lg flex justify-between bg-white shadow-lg md:m-2">
      <div className="-ml-7 rounded-lg logo-container w-25">
         <img className="py-2 mt-1 m-5 pr-6 rounded-lg" src={LOGO_URL}></img>
      </div>
      <div className="-ml-8 flex items-center">
        <ul className="flex px-4">
          <li className="text-gray-600 font-semibold font-serif px-4 hover:scale-105 transition duration-300 ease-out text-[8.5px] md:text-[15px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 font-semibold hover:scale-105 transition duration-300 ease-out font-serif px-4 text-[8.5px] md:text-[15px]">
            <Link to="/about">About Us</Link>
            </li>
          <li className="text-[9px] md:text-[15px] text-gray-600 font-semibold hover:scale-105 transition duration-300 ease-out px-4  font-serif">
            <Link to="/cart">Cart</Link>
            <i className="fa-solid fa-cart-shopping text-gray-500 px-1"></i>
            <Link to="/cart">({cartItems.length})</Link>
          </li>
          <li className="text-gray-600 font-semibold hover:scale-105 transition duration-300 ease-out font-serif px-4 text-[8.5px] md:text-[15px]">
            <Link to="/grocery">Grocery</Link></li>
          <li className="text-gray-600 font-semibold hover:scale-105 transition duration-300 ease-out px-4 font-serif text-[8.5px] md:text-[15px]">
            <Link to="/contactUs">Contact</Link>
          </li>
          
          <button className="login text-gray-600 font-semibold hover:scale-105 flex transition duration-300 ease-out font-serif text-[8.5px] md:text-[15px] px-4"
            onClick={() => {
              btnNameReact === "Login"
              ? setbtnNameReact('Logout')
              : setbtnNameReact('Login');
            }}
          >
          {btnNameReact}
          </button>
          <li className="-ml-6 -mt-0.45 md:-m-1 text-[8.5px] md:text-[13px] md:-ml-4 md:-my-[1.5px] px-4 hover:scale-105 transition duration-300 ease-out">{onlineStatus ? "🟢" : "🔴"} 
          </li>
          {/* <li className="text-gray-600 font-semibold hover:scale-105 transition duration-300 ease-out px-4 font-serif">{ loggedInUser }</li> */}
        </ul>
      </div>
    </div>
  )
}
export default Header;