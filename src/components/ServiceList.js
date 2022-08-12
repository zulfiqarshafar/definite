import React from "react";

function ServiceList({ services }) {
  return (
    <div className="service-list">
      <ul>
        {services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
