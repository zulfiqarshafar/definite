import React from "react";
import "./DealerItem.scss";
import ServiceList from "./ServiceList";

function DealerItem({ stringIdx, dealer, handelClickDealer }) {
  return (
    <div
      className="dealer"
      onClick={() => handelClickDealer(dealer, stringIdx)}
    >
      <div className="dealer__point">{stringIdx}</div>
      <div className="dealer__content">
        <div className="dealer__title">
          <h3>{dealer.title}</h3>
        </div>
        <div className="dealer__address">{dealer.address}</div>
        <ServiceList services={dealer.services} />
      </div>
    </div>
  );
}

export default DealerItem;
