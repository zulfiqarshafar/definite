import React from "react";
import Chatbot from "./Chatbot";
import Footer from "./Footer";
import Nav from "./Nav";
import Widget from "./Widget";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
      <Chatbot />
      <Widget />
    </div>
  );
}

export default Layout;
