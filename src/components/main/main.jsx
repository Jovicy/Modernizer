/* eslint-disable no-unused-vars */
import React from "react";
import mainImg from "../../assets/main-avatar.svg";
import {
  CommandLineIcon,
  ArrowUpLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import gridIcon from "../../assets/Grid.svg";
import skillRate from "../../assets/skill-rate.svg";
import histogram from "../../assets/histogram.svg";
import graph from "../../assets/Graph.svg";
import piechart from "../../assets/pie-chart.svg";
import paypal from "../../assets/paypal.svg";
import creditcard from "../../assets/credit-card.svg";
import wallet from "../../assets/office-bag.svg";
import bank from "../../assets/bank-icon.svg";
import refund from "../../assets/pie-icon.svg";
import bubble from "../../assets/bubble.svg";
import lamp from "../../assets/lamp.svg";
import stardom from "../../assets/stardom.svg";
import openedCoconut from "../../assets/opened-coconut.svg";
import lightGraph from "../../assets/light-graph.svg";
import thickGraph from "../../assets/thick-graph.svg";
import gridColored from "../../assets/grid-colored.svg";

const Main = () => {
  return (
    <div className="flex flex-col gap-5 justify-between w-full">
      <div className="flex gap-5 h-72">
        <div className="bg-light-theme-action-light-light-info rounded-md h-full p-5 w-4/6 shadow-md flex items-center justify-between">
          <div className="w-72 flex flex-col gap-5">
            <h1 className="text-light-theme-gray-dark-blue-grey font-semibold text-xl">
              Welcome back Natalia! Check dashboard
            </h1>
            <p className="text-sm text-light-theme-gray-medium-blue-grey font-normal">
              You have earned 54% more than last month which is great thing.
            </p>
            <div className="flex gap-5">
              <h3 className="text-light-theme-gray-dark-blue-grey font-semibold text-xl">
                $63,489.50
              </h3>
              <button className="text-sm font-semibold text-light-theme-gray-medium-blue-grey bg-white py-0.5 px-2 rounded-md">
                Year 2022
              </button>
            </div>
            <div>
              <button className="px-4 py-0 bg-light-theme-primary-primary text-white rounded-md h-9">
                Check
              </button>
            </div>
          </div>
          <div>
            <img src={mainImg} alt="hero-img" className="w-80 h-60" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-2/6">
          <div className="bg-light-theme-primary-primary p-5 rounded-md shadow-md h-32">
            <div className="flex justify-between items-center text-white">
              <div>
                <h3 className="text-white font-semibold text-lg">3267</h3>
                <p className="text-white font-normal text-sm">Product Goal</p>
              </div>
              <div className="p-2 bg-light-theme-primary-primary shadow-md rounded-md">
                <CommandLineIcon className="h-6 w-6 cursor-pointer" />
              </div>
            </div>
            <div>
              <img src={skillRate} alt="rating" />
            </div>
          </div>
          <div className="bg-light-theme-gray-pure-white p-5 rounded-md shadow-md h-32 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-light-theme-gray-medium-blue-grey font-normal text-sm">
                Earnings
              </p>
              <h3 className="text-light-theme-gray-dark-blue-grey font-semibold text-2xl">
                $678,298
              </h3>
              <div className="flex gap-1">
                <div className="text-light-theme-action-success">
                  <ArrowUpLeftIcon className="h-6 w-6 cursor-pointer bg-light-theme-action-light-light-success p-0.5 rounded-md" />
                </div>
                <div>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    +9%
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={histogram} alt="graph" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-96">
        <div className="bg-white rounded-md h-full p-5 w-4/6 shadow-md flex flex-col gap-5 justify-center">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-light-theme-gray-dark-blue-grey text-lg font-semibold">
                Revenue updates
              </h1>
              <p className="text-light-theme-gray-medium-blue-grey font-normal text-sm">
                Overview of Profit
              </p>
            </div>
            <div>
              <select className="py-1 px-2 border border-light-theme-gray-light-grey rounded-sm text-xs font-semibold text-light-theme-gray-medium-blue-grey focus:none">
                <option value="option1">March 2021</option>
                <option value="option2">April 2021</option>
                <option value="option3">May 2021</option>
                <option value="option4">June 2021</option>
                <option value="option4">July 2021</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <span className="bg-light-theme-primary-primary rounded-full h-2.5 w-2.5"></span>
              <p className="text-xs font-normal text-light-theme-gray-medium-blue-grey">
                Modernize
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-light-theme-secondary-secondary-color rounded-full h-2.5 w-2.5"></span>
              <p className="text-xs font-normal text-light-theme-gray-medium-blue-grey">
                Spike Admin
              </p>
            </div>
          </div>
          <div>
            <img src={graph} alt="graph" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-2/6 bg-white rounded-md shadow-md">
          <div className="flex flex-col gap-5 p-5">
            <div>
              <h1 className="font-normal text-lg text-light-theme-gray-dark-blue-grey">
                Yearly updates
              </h1>
              <p className="text-sm font-normal text-light-theme-gray-medium-blue-grey">
                Overview of Profit
              </p>
            </div>
            <div className="flex justify-center">
              <img src={piechart} alt="pie-chart" />
            </div>
          </div>
          <div className="flex justify-center gap-3 border border-white border-t-border p-5">
            <div className="flex items-center gap-2">
              <span className="bg-light-theme-primary-primary rounded-full h-2.5 w-2.5"></span>
              <p className="text-xs font-normal text-light-theme-gray-medium-blue-grey">
                2021
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-light-theme-secondary-secondary-color rounded-full h-2.5 w-2.5"></span>
              <p className="text-xs font-normal text-light-theme-gray-medium-blue-grey">
                2022
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-light-theme-action-success rounded-full h-2.5 w-2.5"></span>
              <p className="text-xs font-normal text-light-theme-gray-medium-blue-grey">
                2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-100">
        <div className="flex flex-col gap-7 justify-center w-2/6 bg-white rounded-md shadow-md p-5">
          <div>
            <h3 className="text-lg font-semibold text-light-theme-gray-dark-blue-grey">
              Recent Transactions
            </h3>
            <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
              Income vs Expense
            </p>
          </div>
          <div className="flex flex-col justify-between gap-7">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="bg-light-theme-primary-light-primary rounded-md p-1">
                  <img
                    src={paypal}
                    alt="transaction-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-light-theme-gray-dark-blue-grey text-base font-semibold">
                    PayPal Transfer
                  </h3>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    Money added
                  </p>
                </div>
              </div>
              <div>
                <p className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                  +$6,235
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="bg-light-theme-action-light-light-success rounded-md p-1">
                  <img
                    src={wallet}
                    alt="transaction-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-light-theme-gray-dark-blue-grey text-base font-semibold">
                    Wallet
                  </h3>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    Bill payment
                  </p>
                </div>
              </div>
              <div>
                <p className="text-light-theme-gray-medium-blue-grey text-sm font-semibold">
                  +$345
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="bg-light-theme-action-light-light-warning rounded-md p-1">
                  <img
                    src={creditcard}
                    alt="transaction-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-light-theme-gray-dark-blue-grey text-base font-semibold">
                    Credit card
                  </h3>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    Money reversed
                  </p>
                </div>
              </div>
              <div>
                <p className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                  +$2,235
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="bg-light-theme-action-light-light-info rounded-md p-1">
                  <img
                    src={bank}
                    alt="transaction-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-light-theme-gray-dark-blue-grey text-base font-semibold">
                    Bank Transfer
                  </h3>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    Money added
                  </p>
                </div>
              </div>
              <div>
                <p className="text-light-theme-gray-medium-blue-grey text-sm font-semibold">
                  +$320
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="bg-light-theme-action-light-light-error rounded-md p-1">
                  <img
                    src={refund}
                    alt="transaction-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-light-theme-gray-dark-blue-grey text-base font-semibold">
                    Refund
                  </h3>
                  <p className="text-light-theme-gray-medium-blue-grey text-sm font-normal">
                    Bill payment
                  </p>
                </div>
              </div>
              <div>
                <p className="text-light-theme-gray-medium-blue-grey text-sm font-semibold">
                  -$32
                </p>
              </div>
            </div>
            <button className="text-light-theme-primary-primary bg-transparent border border-light-theme-primary-primary px-4 py-1 w-full rounded-md text-sm font-semibold">
              View all transactions
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md h-full p-5 w-4/6 shadow-md flex flex-col gap-7 justify-center">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-light-theme-gray-dark-blue-grey text-lg font-semibold">
                Product Performances
              </h1>
              <p className="text-light-theme-gray-medium-blue-grey font-normal text-sm">
                How it performs
              </p>
            </div>
            <div>
              <select className="py-1 px-2 border border-light-theme-gray-light-grey rounded-sm text-xs font-semibold text-light-theme-gray-medium-blue-grey focus:none">
                <option value="option1">March 2021</option>
                <option value="option2">April 2021</option>
                <option value="option3">May 2021</option>
                <option value="option4">June 2021</option>
                <option value="option4">July 2021</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border border-light-theme-gray-light-grey hover:border-light-theme-primary-primary text-light-theme-gray-medium-blue-grey text-xs font-semibold hover:text-light-theme-primary-primary rounded-md w-20 h-20 flex flex-col gap-2 justify-center items-center">
              <img src={gridIcon} alt="grid" />
              <p>App</p>
            </div>
            <div className="border border-light-theme-gray-light-grey hover:border-light-theme-primary-primary text-light-theme-gray-medium-blue-grey text-xs font-semibold hover:text-light-theme-primary-primary rounded-md w-20 h-20 flex flex-col gap-2 justify-center items-center">
              <img src={gridIcon} alt="grid" />
              <p>Mobile</p>
            </div>
            <div className="border border-light-theme-gray-light-grey hover:border-light-theme-primary-primary text-light-theme-gray-medium-blue-grey text-xs font-semibold hover:text-light-theme-primary-primary rounded-md w-20 h-20 flex flex-col gap-2 justify-center items-center">
              <img src={gridIcon} alt="grid" />
              <p>SaaS</p>
            </div>
            <div className="border border-light-theme-gray-light-grey hover:border-light-theme-primary-primary text-light-theme-gray-medium-blue-grey text-xs font-semibold hover:text-light-theme-primary-primary rounded-md w-20 h-20 flex flex-col gap-2 justify-center items-center">
              <img src={gridIcon} alt="grid" />
              <p>Products</p>
            </div>
            <div className="border border-light-theme-gray-light-grey hover:border-light-theme-primary-primary text-light-theme-gray-medium-blue-grey text-xs font-semibold hover:text-light-theme-primary-primary rounded-md w-20 h-20 flex flex-col gap-2 justify-center items-center">
              <img src={gridIcon} alt="grid" />
              <p>Others</p>
            </div>
          </div>
          <div>
            <table className="w-full border-collapse">
              <tr className="border-b text-left">
                <th className="py-3 px-0 text-sm text-light-theme-gray-medium-blue-grey font-semibold">
                  Assigned
                </th>
                <th className="py-3 px-0 text-sm text-light-theme-gray-medium-blue-grey font-semibold">
                  Progress
                </th>
                <th className="py-3 px-0 text-sm text-light-theme-gray-medium-blue-grey font-semibold">
                  Priority
                </th>
                <th className="py-3 px-0 text-sm text-light-theme-gray-medium-blue-grey font-semibold">
                  Budget
                </th>
                <th className="py-3 px-0 text-sm text-light-theme-gray-medium-blue-grey font-semibold">
                  Chart
                </th>
              </tr>
              <tr className="border-b text-left">
                <td className="py-3 px-0 flex gap-2 items-center">
                  <div>
                    <img src={bubble} alt="image" className="rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                      Minecraf App
                    </h3>
                    <p className="text-light-theme-gray-medium-blue-grey text-xs font-normal">
                      Jason Ray
                    </p>
                  </div>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-md-new-grey text-sm font-normal">
                  73.2%
                </td>
                <td className="py-3 px-0">
                  <button className="bg-light-theme-action-light-light-success h-5 w-16 rounded-sm text-light-theme-action-success font-semibold text-xs">
                    Low
                  </button>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-dark-blue-grey font-normal text-sm">
                  $3.5k
                </td>
                <td className="py-3 px-0">
                  <img src={lightGraph} alt="graph" />
                </td>
              </tr>
              <tr className="border-b text-left">
                <td className="py-3 px-0 flex gap-2 items-center">
                  <div>
                    <img
                      src={openedCoconut}
                      alt="image"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                      Web App Project
                    </h3>
                    <p className="text-light-theme-gray-medium-blue-grey text-xs font-normal">
                      Mathew Flintoff
                    </p>
                  </div>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-md-new-grey text-sm font-normal">
                  55.8%
                </td>
                <td className="py-3 px-0">
                  <button className="bg-light-theme-action-light-light-warning h-5 w-16 rounded-sm text-light-theme-action-warning font-semibold text-xs">
                    Medium
                  </button>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-dark-blue-grey font-normal text-sm">
                  $3.5k
                </td>
                <td className="py-3 px-0">
                  <img src={thickGraph} alt="graph" />
                </td>
              </tr>
              <tr className="border-b text-left">
                <td className="py-3 px-0 flex gap-2 items-center">
                  <div>
                    <img src={lamp} alt="image" className="rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                      Modernize Dashboard
                    </h3>
                    <p className="text-light-theme-gray-medium-blue-grey text-xs font-normal">
                      Anil Kumar
                    </p>
                  </div>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-md-new-grey text-sm font-normal">
                  25%
                </td>
                <td className="py-3 px-0">
                  <button className="bg-light-theme-action-light-light-info h-5 w-16 rounded-sm text-light-theme-action-info font-semibold text-xs">
                    Very high
                  </button>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-dark-blue-grey font-normal text-sm">
                  $3.5k
                </td>
                <td className="py-3 px-0">
                  <img src={lightGraph} alt="graph" />
                </td>
              </tr>
              <tr className="border-b text-left">
                <td className="py-3 px-0 flex gap-2 items-center">
                  <div>
                    <img src={stardom} alt="image" className="rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-light-theme-gray-dark-blue-grey text-sm font-semibold">
                      Dashboard Co
                    </h3>
                    <p className="text-light-theme-gray-medium-blue-grey text-xs font-normal">
                      George Cruize
                    </p>
                  </div>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-md-new-grey text-sm font-normal">
                  96.3%
                </td>
                <td className="py-3 px-0">
                  <button className="bg-light-theme-action-light-light-error h-5 w-16 rounded-sm text-light-theme-action-error font-semibold text-xs">
                    High
                  </button>
                </td>
                <td className="py-3 px-0 text-light-theme-gray-dark-blue-grey font-normal text-sm">
                  $3.5k
                </td>
                <td className="py-3 px-0">
                  <img src={lightGraph} alt="graph" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-120">
        <div className="bg-white rounded-md shadow-md w-2/6 p-5">
          <div>
            <div>
              <h3>Total profit</h3>
            </div>
            <div>
              <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <div>
            <div>
              <img src={gridColored} alt="grid-colored" />
            </div>
            <div>
              <h3>$63,489.50</h3>
              <p>Total Earnings</p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className="bg-white rounded-md shadow-md w-2/6 p-5">hello</div>
        <div className="bg-white rounded-md shadow-md w-2/6 p-5">hello</div>
      </div>
    </div>
  );
};

export default Main;
