import React from "react";
import { useState } from "react";
import "./Widget.scss";

function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);

  const handleToggle = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      {isWidgetOpen ? (
        <div className="widget__open">
          <div className="widget__menu">
            <ul>
              <li>FIND DEALER</li>
              <li>BROCHURE DOWNLOAD</li>
              <li>TEST DRIVE</li>
              <li>CREDIT SIMULATION</li>
              <li>PURCHASE CONSULTATION</li>
            </ul>
            <div className="widget__close">
              <span className="widget__close__icon" onClick={handleToggle}>
                &times;
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="widget__shortcut">
          <span className="widget__shortcut__icon" onClick={handleToggle}>
            O
          </span>
        </div>
      )}
    </>
  );
}

export default Widget;
