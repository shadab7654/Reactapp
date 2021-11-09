import React from "react";
import { NavLink } from "react-router-dom";
import pngegg from '../Images/pngegg.png';
import '../Css/Liststyle.css';

const List = () => {
    return (
        <header>
            <div className="container container-flex">
                <div className="logocontainer">
                    <img src={pngegg} alt="logo" className="logo" />
                </div>
                <nav>
                    <div className="list">
                        <NavLink exect to="/" className={({ isActive }) => isActive ? "listitem activeItem" : "listitem"} >Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "listitem activeItem" : "listitem"}>About</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "listitem activeItem" : "listitem"} >Services</NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? "listitem activeItem" : "listitem"} >Product</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "listitem activeItem" : "listitem"} >Contact</NavLink>


                    </div>
                </nav>
                <div className="icon">
                    <span className="material-icons material-icons-outlined">
                        search
                    </span>
                    <span className="material-icons material-icons-outlined">
                        person
                    </span>
                    <span className="material-icons material-icons-outlined">
                        phone
                    </span>

                </div>

            </div>
        </header>
    );
}
export default List;
