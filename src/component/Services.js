import React from "react";
import { NavLink } from "react-router-dom";
import c from '../Images/c.png';
import node from '../Images/node.png';
import js from '../Images/js.png';
import css1 from '../Images/css1.png';
import AIR from '../Images/AIR.png';
import rubby from '../Images/rubby.png';
import '../Css/Service.css';

const Services=()=>{
    return(
        <section>
            <div className="service">
                <h2>Our Service's</h2>
                <div className="myImage1">
                    <div className="image1">
                        <img src={c} />
                        <h1>C Programing</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                        </div>
                        <div className="image2">
                        <img src={node} />
                        <h1>Node Js</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                        
                    </div>
                    <div className="image3">
                        <img src={js} />
                        <h1>JavaScript Programing</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                    </div>
                    

                </div>
                <div className="myImage2">
                    <div className="image4">
                        <img src={css1} />
                        <h1>CSS</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                        </div>
                        <div className="image5">
                        <img src={AIR} />
                        <h1>AI and ML</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                        
                    </div>
                    <div className="image6">
                        <img src={rubby} />
                        <h1>Rubby</h1>
                        <p>Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation</p>
                    </div>
                    

                </div>
                <div className="para">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    <div className="servicebtn">
                        <NavLink to="/product" className="MoreService"
                            activeClassName="activeItem">MoreService</NavLink>
                    </div>

                </div>

            </div>
        </section>
        
    )
}
export default Services;