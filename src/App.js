import React from "react";
import "./App.css";
import styled from "styled-components";
import eventsData from "./data";

// import icons
import {
  MdDashboard,
  MdEvent,
  MdSettings,
  MdKeyboardArrowDown,
  MdFormatListBulleted,
  MdEdit
} from "react-icons/md";
import { FaStar, FaUsers, FaBell, FaRegCalendar } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { GiScrewdriver } from "react-icons/gi";
import { GoSignIn } from "react-icons/go";
import { FiPlus, FiSearch, FiGrid } from "react-icons/fi";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount", this._getEventsData());
  }

  // get events Data
  _getEventsData = () => {
    let data = eventsData;

    // check if browser supports local storage
    if (typeof Storage !== "undefined") {
      localStorage.setItem("data", JSON.stringify(eventsData));

      data = JSON.parse(localStorage.getItem("data"));
    }

    return data;
  };

  render() {
    return (
      <>
        <header>
          <div className="wrapper">
            <span className="community">
              community<span>manager</span>
            </span>
            <nav>
              <ul>
                <li>
                  <MdDashboard />
                  <a href="#Fixme">dashboard</a>
                </li>
                <li>
                  <MdEvent />
                  <a href="#Fixme">events</a>
                </li>
                <li>
                  <FaStar />
                  <a href="#Fixme">facilities</a>
                </li>
                <li>
                  <TiNews />
                  <a href="#Fixme">news</a>
                </li>
                <li>
                  <GiScrewdriver />
                  <a href="#Fixme">maintenance</a>
                </li>
                <li>
                  <GoSignIn />
                  <a href="#Fixme">sign ins</a>
                </li>
                <li>
                  <FaUsers />
                  <a href="#Fixme">users</a>
                </li>
                <li>
                  <MdSettings />
                  <a href="#Fixme">settings</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>this is main</main>
      </>
    );
  }
}

export default App;
