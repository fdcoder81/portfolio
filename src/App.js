import React from "react";
import Content from "./pages/content/Content";
import Sidebar from "./pages/sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="fixed-div"></div>
      <Content />
    </div>
  );
}

export default App;
