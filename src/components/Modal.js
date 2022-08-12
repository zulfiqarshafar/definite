import React from "react";
import Email from "./icons/Email";
import MapIcon from "./icons/MapIcon";
import Phone from "./icons/Phone";
import "./Modal.scss";
import ServiceList from "./ServiceList";

function Modal({ dealer, stringIdx, setIsModalOpen }) {
  return (
    <div
      className="modal"
      onClick={(event) => {
        if (event.target.classList.contains("modal__close__icon")) {
          document.querySelector("body").style.overflow = "auto";
          setIsModalOpen(false);
        }
      }}
      aria-hidden="true"
    >
      <div className="modal__container">
        <div className="modal__main">
          <div className="modal__point">{stringIdx}</div>
          <div className="modal__info">
            <ServiceList services={dealer.services} />
            <h2>{dealer.title}</h2>
            <div className="modal__info__location">
              <div className="modal__info__address">{dealer.address}</div>
              <div className="modal__info__distance">
                {dealer.distance_km} km
              </div>
            </div>
            <div className="modal__info__map">
              <a
                href={`https://www.google.com/maps/dir/Current+Location/${dealer.latitude},${dealer.longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                <MapIcon />
                <p>VIEW DIRECTION</p>
              </a>
            </div>
            <div className="modal__button">
              <button className="modal__button__test-drive">
                REQUEST TEST DRIVE
              </button>
              <button className="modal__button__service">BOOK SERVICE</button>
            </div>
          </div>

          <div className="modal__close">
            <span className="modal__close__icon">&times;</span>
          </div>
        </div>
        <div className="modal__divider"></div>
        <div className="modal__description">
          <div className="modal__schedule">
            <div className="modal__schedule__showroom">
              <h3>Showroom</h3>
              <ul>
                {dealer.showroom_operational_hours.map((operational, idx) => (
                  <li key={idx}>
                    <span>{operational.days}</span>
                    <span>{operational.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal__schedule__bengkel">
              <h3>Bengkel</h3>
              <ul>
                {dealer.bengkel_operational_hours.map((operational, idx) => (
                  <li key={idx}>
                    <span>{operational.days}</span>
                    <span>{operational.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modal__contact">
            <h3>Contact</h3>
            <div className="modal__contact__phone">
              <span className="modal__contact__icon">
                <Phone />
              </span>
              <span>{dealer.phone}</span>
            </div>
            <div className="modal__contact__email">
              <span className="modal__contact__icon">
                <Email />
              </span>
              <span>{dealer.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
