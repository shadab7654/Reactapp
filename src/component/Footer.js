import React from "react";
import '../Css/Footerstyle.css';

const Footer = () => {
    return (

        <footer>
            <div className="container contaioner-flex">
                <div className="icon">
                    <span className="material-icons material-icons-outlined">
                        email
                    </span>
                    <span className="material-icons material-icons-outlined">
                        duo
                    </span>
                    <span className="material-icons material-icons-outlined">
                        textsms
                    </span>
                    <span className="material-icons material-icons-outlined">
                        contact_phone
                    </span>


                </div>
                <div className="line">
                    <hr/>
                </div>
                <div className="copyright">
                    <p>All Right Reserved &copy;</p>
                    <p>Made by Md Shadab Alam</p>
                </div>

            </div>
        </footer>

    )
}
export default Footer;