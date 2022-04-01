import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop.js";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import GooglePlay from "../../images/icon_GooglePlay.png";
import Apple from "../../images/icon_AppStore.png";

export default function Footer() {
  return (
    <footer>
      <div className="footerIndicator">
        <ScrollToTop />

        <h1>Site Navigation</h1>

        <div className="line"></div>
        <ul className="list-footer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Rooms</Link>
          </li>

          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="download-apps">
        <h1>Download Apps</h1>
        <img src={GooglePlay} alt="googleplay" />
        <img src={Apple} alt="ios" />
      </div>

      <div className="social-media-section">
        <h1>Social media</h1>
      </div>
      <div className="social-media-icon-group">
        <div className="social-media-icon">
          <IoLogoFacebook />
        </div>
        <div className="social-media-icon">
          <IoLogoTwitter />
        </div>
        <div className="social-media-icon">
          <IoLogoInstagram />
        </div>
        <div className="social-media-icon">
          <IoLogoYoutube />
        </div>
      </div>

      <p className="copyrights">
        &copy; 2022 Jeffreywwc - Hotelroom.com - All rights reserved
      </p>
    </footer>
  );
}
