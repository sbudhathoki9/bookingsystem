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
          <div className="icon-wrapper">
            <div className="icon-absolute">
              <FaLocationArrow className="w-4 h-4 icon-color" />
            </div>
            <input
              name="end"
              type="text"
              className="input-base input-with-icon ml-3"
              placeholder="Locations"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="icon-wrapper">
              <div className="icon-absolute">
                <FaCalendar className="w-4 h-4 icon-color" />
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                className="input-base input-with-icon"
                placeholderText="Select date start"
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="icon-wrapper">
              <div className="icon-absolute">
                <FaCalendar className="w-4 h-4 icon-color" />
              </div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={new Date()}
                className="input-base input-with-icon"
                placeholderText="Select date end"
              />
            </div>
          </div>
          <div>
            <button className="button-base mr-2">
              <FaSearch className="w-4 h-4 icon-color mr-3" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedInDashBoard;
