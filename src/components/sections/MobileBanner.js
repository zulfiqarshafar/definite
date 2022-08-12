import React from "react";
import "./MobileBanner.scss";

function MobileBanner() {
  return (
    <section className="mobile-banner">
        <div className="mobile-banner__container">
          <div className="mobile-banner__content">
            <h1>
              LIVE SIMPLE WITH <br />
              MY MITSUBISHI
            </h1>
            <p>
              Nikmati semua fasilitas berkendara Mitsubishi, <br />
              dari book test drive hingga service berkala <br />
              langsung dari tangan Anda dengan My Mitsubishi ID.
            </p>
            <p>Download aplikasinya sekarang di App Store dan Play Store.</p>
            <div className="mobile-banner__button">
              <button className="mobile-banner__button__appstore"></button>
              <button className="mobile-banner__button__playstore"></button>
            </div>
          </div>
          <div className="mobile-banner__container__banner"></div>
        </div>
    </section>
  );
}

export default MobileBanner;
