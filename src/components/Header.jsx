import React from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header navbar-dark bg-#28057d sticky-top">
        <Link className="navbar-brand" to="/">
          Crypto Coin App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation "
        >
          <span className="navbar-toggler-icon btn1  "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto px-2  list-item">
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/exchanges">
                Exchanges
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/coins">
                Coins
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item  ">
              <Link className=" ">
                <button type="button" className="btn btn-primary">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
