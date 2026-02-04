// This is how we write a 'named import'
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');
  
  return (
    <div className="header">
      <div className="logo-container">
         <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <button className="login"
            onClick={() => {
              btnNameReact === "Login"
              ? setbtnNameReact('Logout')
              : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;