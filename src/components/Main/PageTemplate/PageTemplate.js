import NavBar from "components/Common/NavBar/NavBar";
import Footer from "components/Common/Footer/Footer";
import ScrollTop from 'components/Common/ScrollTop/ScrollTop';
import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
      <ScrollTop/>
    </div>
  );
};

export default PageTemplate;
