import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { SetCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        SetCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        SetCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "pkr": {
        SetCurrency({ name: "pkr", symbol: "Rs" });
        break;
      }
      case "inr": {
        SetCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        SetCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pkr">PKR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up
          <img src={arrow_icon} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
