import React from "react";
import { NavLink } from "react-router-dom";
import pnl from '../Images/pnl.png';
import '../Css/HomeAbout.css';

const About = () => {
    return (
        <div className="mainSection">
            <div className="contentBox">
                <h1>Know More About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged</p>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to="/services" className="Knowmore"
                            activeClassName="activeItem">Knowmore</NavLink>
                    </div>
                </div>
            </div>
            <div className="image1">
                <img src={pnl} alt="" />

            </div>
        </div>

    )
}
export default About;