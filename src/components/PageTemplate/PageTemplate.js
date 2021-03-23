import NavBar from "components/Common/NavBar/NavBar";
import React from "react";

const PageTemplate = ({ children }) => {
  return (<div>
    <NavBar/>
    {children}
    </div>);
};

export default PageTemplate;
