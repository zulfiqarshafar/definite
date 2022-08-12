import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">STAY CONNECTED WITH US</div>
        <ul className="footer__links">
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>email</li>
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
