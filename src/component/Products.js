import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/product.css';
import web1 from '../Images/web1.jpeg';
import we2 from '../Images/we2.jpeg';
import web3 from '../Images/web3.jpeg';
import web4 from '../Images/web4.jpeg';
import web5 from '../Images/web5.jpeg';
import web6 from '../Images/web6.jpeg';

const Products=()=>{
    return(
        <div className="container">
            <h2>Our Product's</h2>
            <div className="productimg">
                <div className="prduct1">
                    <img src={web1} />
                    <h1>Web Development</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>
                <div className="prduct2">
                    <img src={we2} />
                    <h1>Browser Extension</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>
                <div className="prduct3">
                    <img src={web3} />
                    <h1>Web Application</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>
            </div>
            <div className="productimg2">
            <div className="prduct4">
                    <img src={web4} />
                    <h1>Web Design</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>
                <div className="prduct5">
                    <img src={web5} />
                    <h1>Andriod App</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>
                <div className="prduct6">
                    <img src={web6} />
                    <h1>Quiklrn</h1>
                    <p>Spider web, a silken structure created by the animal; World Wide Web or the Web, 
                        an Internet-based hypertext system. Web or WEB may also refer to: Contents</p>
                </div>

            </div>
           <div className="somepara">
           <p>More Results. Trusted results for E Commerce Website Uk. Check Visymo Search for the best results!
                 Unlimited Access. 100% Secure. Always Facts. Privacy Friendly.
                 The Best Resources. Results and Answers. Services: Best Results, Explore Now, New Sources.
            </p>

           </div>

        </div>
    )
}
export default Products;