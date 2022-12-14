import React, { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        hideSidebar={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        hideSidebar={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
};

export default Homepage;
