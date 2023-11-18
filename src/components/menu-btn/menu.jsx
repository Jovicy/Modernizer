/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/MenuBar.js
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const MenuBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="">
      <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default MenuBar;
