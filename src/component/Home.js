import React from "react";
import { NavLink } from "react-router-dom";
import boy from '../Images/boy.png';
import '../Css/HomeAbout.css';

const Home = () => {
    return (
        <div className="mainSection">
            <div className="contentBox">
                <h1>Easy Learning</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged</p>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to="/about" className="readmore"
                            activeClassName="activeItem">readmore</NavLink>
                    </div>
                </div>
            </div>
            <div className="images">
                        <img src={boy} alt="" />

                    </div>
        </div>
    )
}
export default Home;