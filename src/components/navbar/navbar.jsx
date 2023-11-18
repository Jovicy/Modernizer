/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MenuBar from "../menu-btn/menu";
import PropTypes from 'prop-types';
import { MagnifyingGlassIcon, BellIcon, ShoppingCartIcon, LanguageIcon, TableCellsIcon} from "@heroicons/react/24/outline";
import profileIcon from "../../assets/Profile icon.svg";

const Navbar = ({ toggleSidebar }) => {
    return (
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <MenuBar toggleSidebar={toggleSidebar} />
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        </div>
        <div className="flex gap-4 items-center">
          <BellIcon className="h-6 w-6 cursor-pointer"/>
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer	"/>
          <LanguageIcon className="h-6 w-6 cursor-pointer"/>
          <TableCellsIcon className="h-6 w-6 cursor-pointer"/>
          <div>
            <img src={profileIcon} alt="profile-icon" />
          </div>
        </div>
      </nav>
    );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
