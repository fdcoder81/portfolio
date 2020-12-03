import React, { useEffect, useState } from "react";
import Content from "./pages/content/Content";
import Sidebar from "./pages/sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import MobileHeader from "./component/mobile-header/MobileHeader";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  function handleClickOutside() {
    if (toggleSidebar) {
      setToggleSidebar(false);
    }
  }

  return (
    <BrowserRouter>
      <div className="container">
        <MobileHeader
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <Sidebar toggleSidebar={toggleSidebar} />
        <div className="fixed-div"></div>
        <Content handleClickOutside={handleClickOutside} />
      </div>
    </BrowserRouter>
  );
}

export default App;
