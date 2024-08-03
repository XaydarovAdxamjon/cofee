import React from 'react';
import st from "./footer.module.css";
import logo from "../../images/logo.png";
import { Facebook, Twitter, Instagram } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className={st.footer}>
                <div className={st.container}>
                    <div className={st.footer__logo} onClick={() => handleClick('/')}>
                        <img src={logo} alt="Coffeeroasters logo" />
                        coffeeroasters
                    </div>

                    <div className={st.footer__nav}>
                        <ul>
                            <li onClick={() => handleClick('/home')}>Home</li>
                            <li onClick={() => handleClick('/about')}>About us</li>
                            <li onClick={() => handleClick('/plan')}>Create your plan</li>
                        </ul>
                    </div>

                    <div className={st.footer__links}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={18} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
