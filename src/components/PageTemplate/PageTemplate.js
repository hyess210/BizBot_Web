import NavBar from "components/Common/NavBar/NavBar";
import Footer from "components/Common/Footer/Footer";
import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
