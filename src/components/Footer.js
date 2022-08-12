import React from "react";
import "./Footer.scss";
import Email from "./icons/Email";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">STAY CONNECTED WITH US</div>
        <ul className="footer__links">
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Youtube />
          </li>
          <li>
            <Email />
          </li>
        </ul>
        <div className="footer__description">Contact Us</div>
      </div>
      <div className="footer__copyright">
        <p>COPYRIGHT 2021</p>
        <p>PT MITSUBISHI MOTORS KRAMA YUDHA SALES INDONESIA</p>
      </div>
    </footer>
  );
}

export default Footer;
