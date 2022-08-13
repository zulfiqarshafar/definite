import React, { useState } from "react";
import "./Chatbot.scss";

function Chatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(true);

  const handleToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      {isChatbotOpen ? (
        <div className="chatbot__open">
          <span className="chatbot__close" onClick={handleToggle}>
            &times;
          </span>
          <p>Ask MIRA</p>
          <div className="chatbot__image">
            <img src={require("../assets/chatbot.png")} alt="Chatbot" />
          </div>
        </div>
      ) : (
        <div className="chatbot__shortcut">
          <div className="chatbot__shortcut__image" onClick={handleToggle}>
            <img src={require("../assets/chatbot.png")} alt="Chatbot" />
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
