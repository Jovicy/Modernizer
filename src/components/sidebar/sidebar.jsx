/* eslint-disable no-unused-vars */
// src/Sidebar.js
import React, { useState } from "react";
import Logo from "../../assets/Modernize.svg";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import rocket from "../../assets/rocket1 1.svg";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(true);
  const [isOthersOpen, setIsOthersOpen] = useState(true);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleApplications = () => {
    setIsApplicationsOpen(!isApplicationsOpen);
  };

  const toggleOthers = () => {
    setIsOthersOpen(!isOthersOpen);
  };

  return (
    <div className="bg-light-theme-gray-pure-white border border-white border-r-light-theme-gray-light-grey w-1/4 h-screen p-4 pb-4 flex flex-col gap-3">
      <div className="text-2xl font-semibold mb-4">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="border border-white border-b-light-theme-gray-light-grey py-2 px-0">
        <h1
          className="text-light-theme-gray-md-new-grey font-semibold text-xs cursor-pointer"
          onClick={toggleDashboard}
        >
          DASHBOARD
        </h1>
        <div
          className={`transition-all ${
            isDashboardOpen ? "block" : "hidden"
          } flex flex-col gap-1 py-3`}
        >
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm ">
            <ShoppingBagIcon className="h-6 w-6" />
            <li className="text-sm font-normal light-theme-gray-md-new-grey">
              Modem
            </li>
          </div>
          <div className="flex gap-2 items-center justify-between hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <div className="flex gap-2 items-center">
              <ShoppingBagIcon className="h-6 w-6" />
              <li className="text-sm font-normal light-theme-gray-md-new-grey">
                Analytics
              </li>
            </div>
            <div className="bg-light-theme-primary-primary w-5 h-5 flex justify-center items-center rounded-full p-3">
              <p className="italics font-extralight text-sm text-white">9</p>
            </div>
          </div>
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <li className="text-sm font-normal light-theme-gray-md-new-grey">
              eCommerce
            </li>
          </div>
        </div>
      </ul>

      <ul className="border border-white border-b-light-theme-gray-light-grey py-2 px-0">
        <h1
          className="text-light-theme-gray-md-new-grey font-semibold text-xs cursor-pointer"
          onClick={toggleApplications}
        >
          APPLICATIONS
        </h1>
        <div
          className={`transition-all ${
            isApplicationsOpen ? "block" : "hidden"
          } flex flex-col gap-1 py-3`}
        >
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <li className="text-sm font-normal light-theme-gray-md-new-grey">
              Chat
            </li>
          </div>
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <select className="flex-1 bg-transparent focus:outline-none">
              <option value="option1">Users</option>
              <option value="option2">
                <li className="list-disc">Hello</li>
              </option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <select className="flex-1 bg-transparent focus:outline-none">
              <option value="option1">Analytical</option>
              <option value="option2">
                <li className="list-disc">Hello</li>
              </option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <li className="text-sm font-normal light-theme-gray-md-new-grey">
              eCommerce
            </li>
          </div>
          <div className="flex gap-2 items-center hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <ShoppingBagIcon className="h-6 w-6" />
            <li className="text-sm font-normal">
              Disable
            </li>
          </div>
        </div>
      </ul>

      <ul className="border border-white border-b-light-theme-gray-light-grey py-2 px-0">
        <h1
          className="text-light-theme-gray-md-new-grey font-semibold text-xs cursor-pointer"
          onClick={toggleOthers}
        >
          OTHERS
        </h1>
        <div
          className={`transition-all ${isOthersOpen ? "block" : "hidden"} flex flex-col gap-1 py-3`}
        >
          <div className="flex gap-2 items-center justify-between hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <div className="flex gap-2 items-center">
              <ShoppingBagIcon className="h-6 w-6" />
              <li className="text-sm font-normal light-theme-gray-md-new-grey">
                Avatar
              </li>
            </div>
            <div className="bg-light-theme-primary-primary flex justify-center items-center rounded-full px-2 py-0">
              <p className="italics font-extralight text-sm text-white">Coded</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <div className="flex gap-2 items-center">
              <ShoppingBagIcon className="h-6 w-6" />
              <li className="text-sm font-normal">
                Outline
              </li>
            </div>
            <div className="border border-light-theme-primary-primary hover:text-white flex justify-center items-center rounded-full px-2 py-0">
              <p className="italics font-extralight text-sm text-light-theme-primary-primary hover:text-white">Outline</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between hover:bg-light-theme-primary-primary hover:text-white p-1 rounded-sm">
            <div className="flex gap-2 items-center">
              <ShoppingBagIcon className="h-6 w-6" />
              <li className="text-sm font-normal light-theme-gray-md-new-grey">
                Basic
              </li>
            </div>
            <div className="bg-light-theme-primary-primary w-5 h-5 flex justify-center items-center rounded-full p-3">
              <p className="italics font-extralight text-sm text-white">9</p>
            </div>
          </div>
        </div>
      </ul>

      <div className="w-56 bg-light-theme-primary-light-primary p-3 rounded-md flex justify-between items-center">
          <div className="flex flex-col gap-1 w-1/2">
            <h3 className="text-base font-semibold text-light-theme-gray-md-new-grey">Unlimited Access</h3>
            <button className="bg-light-theme-primary-primary rounded-md py-1.5 px-4 text-sm text-white font-semibold">Signup</button>
          </div>
          <div className="w-1/2 relative -mt-16">
            <img src={rocket} alt="rocket" />
          </div>
      </div>
    </div>
  );
};

export default Sidebar;