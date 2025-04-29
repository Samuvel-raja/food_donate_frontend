import React from "react";
import "../styles/navbar.css";
import Logo from "../assets/logo.jpeg";
import Cookies from "js-cookie";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const role = Cookies.get("role");
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const path = useLocation();

  const handleSignOut = () => {
    if (token) {
      Cookies.remove("token");
      navigate("/loginsignin");
    } else {
      navigate("/loginsignin");
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
      <div className='navbar-right'>
        {role === "donor" && path.pathname != "/" && (
          <>
            <Link to='/donatefood' className='nav-link'>
              Donate Food
            </Link>
            <Link to='/mydonations' className='nav-link'>
              My Donations
            </Link>
          </>
        )}
        {role === "recipient" && path.pathname != "/" && (
          <>
            <Link to='/foodlistings' className='nav-link'>
              Food Listings
            </Link>
            <Link to='/myrequests' className='nav-link'>
              My Requests
            </Link>
          </>
        )}
        {role === "volunteer" && path.pathname != "/" && (
          <>
            <Link to='/volunteer' className='nav-link'>
              Food Requests
            </Link>
            <Link to='/map' className='nav-link'>
              Map
            </Link>
          </>
        )}
        <button className='sign-out-btn' onClick={handleSignOut}>
          {path.pathname != "/" ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
