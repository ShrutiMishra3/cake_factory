import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import logo from "/images/cakeFactory.jpg";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const [totalCartItems, setTotalCartItems] = useState(cartItems[0]);

  useEffect(() => {
    const totalCount = Object.values(cartItems).reduce(
      (acc, count) => acc + count,
      0
    );
    setTotalCartItems(totalCount);
  }, [cartItems]);

  return (
    <nav className="navbar bg-warning border-bottom border-bottom-dark navbar-expand-lg" data-bs-theme="light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo-img" alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="nav-link active" aria-current="page">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link active" aria-current="page">
                    Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="col-md-6 justify-content-lg-center d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex m-2">
            <ul>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <button type="button" className="btn btn-warning position-relative">
                    <i className="fas fa-shopping-cart fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalCartItems}
                      <span className="visually-hidden">Items in cart</span>
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
