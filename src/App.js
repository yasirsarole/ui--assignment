import React from "react";
import "./App.css";
import eventsData from "./data";

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
            <span class="community">
              community<span>manager</span>
            </span>
            <nav>
              <ul>
                <li>
                  <a href="#Fixme">dashboard</a>
                </li>
                <li>
                  <a href="#Fixme">events</a>
                </li>
                <li>
                  <a href="#Fixme">facilities</a>
                </li>
                <li>
                  <a href="#Fixme">news</a>
                </li>
                <li>
                  <a href="#Fixme">maintenance</a>
                </li>
                <li>
                  <a href="#Fixme">sign ins</a>
                </li>
                <li>
                  <a href="#Fixme">users</a>
                </li>
                <li>
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
