import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

interface Props {
  userId: string | undefined;
}

export const Header: React.FC<Props> = ({ userId }) => {

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark relative-top m-0 bg-opacity-75"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo001.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="destinations" style={{ color: "white" }}>
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={userId ? `/user/${userId}` : "/"}
                style={{ color: "white" }}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{
                  backgroundColor: "black",
                  boxShadow: "0px 14px 35px 2px rgba(255,255,255,0.5)",
                  opacity: 0.9,
                }}
              >
                {userId ? (
                  <>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={userId ? `/user/${userId}` : "/"}
                        style={{ color: "white" }}
                      >
                        My trips
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/logout"
                        style={{ color: "white" }}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : 
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      style={{ color: "white" }}
                    >
                      Login
                    </Link>
                  </li>
                }
                
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light"
              style={{ color: "white", backgroundColor: "none" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
