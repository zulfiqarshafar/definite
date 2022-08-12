import React from "react";
import "./Modal.scss";
import ServiceList from "./ServiceList";

function Modal({ dealer, stringIdx, setIsModalOpen }) {
  return (
    <div
      className="modal"
      onClick={(event) => {
        if (event.target.classList.contains("modal")) {
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
              <span>map</span>
              <p>VIEW DIRECTION</p>
            </div>
            <div className="modal__button">
              <button className="modal__button__test-drive">
                REQUEST TEST DRIVE
              </button>
              <button className="modal__button__service">BOOK SERVICE</button>
            </div>
          </div>

          <div className="modal__close">X</div>
        </div>
        <div className="modal__divider"></div>
        <div className="modal__description">
          <div className="modal__schedule">
            <div className="modal__schedule__showroom">
              <h2>Showroom</h2>
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
              <h2>Bengkel</h2>
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
            <h2>Contact</h2>
            <div className="modal__contact__phone">
              <span className="modal__contact__icon">icon</span>
              <span>{dealer.phone}</span>
            </div>
            <div className="modal__contact__email">
              <span className="modal__contact__icon">icon</span>
              <span>{dealer.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
