import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaCalendar, FaLocationArrow } from "react-icons/fa";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import dynamic from "next/dynamic";
import "../globals.css";

const LoggedInDashBoard = () => {
  //const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <>
      <div className="container">
        <div className="flex gap-3">
          <div className="relative items-center inline-flex">
            <div className="absolute left-0 flex pl-4 text-sm pointer-events-none">
              <FaLocationArrow className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              name="end"
              type="text"
              className="bg-gray-50 ml-3 border border-gray-300 pl-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Locations"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <FaCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date start"
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-10 pointer-events-none">
                <FaCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={new Date()}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date end"
              />
            </div>
          </div>
          {/* <div date-rangepicker className="flex items-center">

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                name="start"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
              ></input>
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                name="end"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date end"
              ></input>
            </div>
  </div> */}
          <div>
            <button className="inline-flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-3" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedInDashBoard;
