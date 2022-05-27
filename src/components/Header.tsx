import React from "react";
import './Header.css';

interface Header {
    text: string;
}

export const Header: React.FC<Header> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top m-0" style={{ opacity: 0.9 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="/logo001.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" style={{ color: 'white' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>Destinations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>Gallary</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" style={{ color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: 'black', boxShadow: '0px 14px 35px 2px rgba(255,255,255,0.5)', opacity: 0.9 }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>My profile</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>My favourites</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Some info</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" style={{ color: 'white', backgroundColor: 'none' }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    )
}