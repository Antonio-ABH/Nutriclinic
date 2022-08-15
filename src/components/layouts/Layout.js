import React from "react";
import Brand from "../brand/Brand";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Brand />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
