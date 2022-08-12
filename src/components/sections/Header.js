import React from "react";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__title">
          <h1>FIND DEALER</h1>
        </div>
        <div className="header__description">
          <p>
            Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda
            untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari
            Mitsubishi Motors Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
