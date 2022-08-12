import React from "react";
import Chatbot from "./Chatbot";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Layout;
