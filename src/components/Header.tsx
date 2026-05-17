// This is how we write a 'named import'.
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
    <div className="flex-col md:flex-row mt-2 md:mt-0 py-3 m-3 md:py-0 rounded-lg flex flex-wrap justify-between items-center bg-white shadow-sm md:m-2 h-auto md:h-25 mx-5 md:mx-0">
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <div className="w-20 h-16 overflow-hidden flex items-center justify-center">
        <img
          className="h-full w-auto object-contain -mt-5 md:mt-0" 
          src={LOGO_URL}
          alt='logoIcon'>
        </img>
      </div>
      <span className="text-orange-500 font-bold text-md md:text-xl md:-ml-4 -mt-5.5 md:mt-0">Sandburgs</span>
      </div>

      <div className="w-full md:w-auto flex justify-center items-center">
        <ul className="flex flex-row mt-3 md:mt-0 md:px-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <li className="text-gray-800 cursor-pointer font-serif px-4 hover:scale-105 transition-all duration-300 ease-out text-[8.5px] md:text-[17px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-800 cursor-pointer hover:scale-105 transition-all duration-300 ease-out font-serif px-4 text-[8.5px] md:text-[17px]">
            <Link to="/about">About Us</Link>
            </li>
          <li className="text-[9px] md:text-[17px] cursor-pointer text-gray-800 hover:scale-105 transition-all duration-300 ease-out px-4  font-serif">
            <Link to="/cart">Cart</Link>
            <i className="fa-solid fa-cart-shopping text-gray-500 px-1"></i>
            <Link to="/cart">({cartItems.length})</Link>
          </li>
          <li className="text-gray-800 cursor-pointer hover:scale-105 transition-all duration-300 ease-out font-serif px-4 text-[8.5px] md:text-[17px]">
            <Link to="/grocery">Grocery</Link></li>
          <li className="text-gray-800 cursor-pointer hover:scale-105 transition-all duration-300 ease-out px-4 font-serif text-[8.5px] md:text-[17px]">
            <Link to="/contactUs">Contact</Link>
          </li>
          
          <button className="login cursor-pointer text-gray-800 hover:scale-105 flex transition-all duration-300 ease-out font-serif text-[8.5px] md:text-[17px] px-4"
            onClick={() => {
              btnNameReact === "Login"
              ? setbtnNameReact('Logout')
              : setbtnNameReact('Login');
            }}
          >
          {btnNameReact}
          </button>
          <li className="-ml-6 -mt-0.45 md:-m-1 cursor-pointer text-[8.5px] md:text-[13px] md:-ml-4 md:-my-[1.5px] px-4 hover:scale-105 transition-all duration-300 ease-out">
            {onlineStatus ? "🟢" : "🔴"} 
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header;