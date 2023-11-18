/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app flex w-full text-light-theme-gray-medium-blue-grey">
      {isSidebarOpen && <Sidebar className="w-1/4" />}
      <div className="p-4 flex flex-col gap-2 w-full">
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        <div>
          <Main/>
        </div>
      </div>
    </div>
  );
}
export default App;
