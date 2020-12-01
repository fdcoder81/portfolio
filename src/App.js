import React from "react";
import Content from "./pages/content/Content";
import Sidebar from "./pages/sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <div className="fixed-div"></div>
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
