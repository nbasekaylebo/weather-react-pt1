import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="background">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="search"
                      placeholder="Check your city"
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-3 col-sm-2">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-outline-secondary w-90"
                    />
                  </div>
                  <div className="col-3 col-sm-2">
                    <button
                      className="btn btn-outline-secondary w-90"
                      id="current-location-button"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </form>

              <div className="row flex-column-reverse flex-sm-row">
                <div className="col-12 col-sm-6 mini-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="overview">
                        <h1 id="city">London</h1>
                        <ul>
                          <li>
                            <span id="date"></span>
                          </li>
                          <li id="description"></li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="clearfix weather-temperature">
                            <div className="float-left">
                              <strong id="temperature">25</strong>
                              <span className="units"> °C</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <ul>
                            <li>
                              Humidity: <span id="humidity">0</span>%
                            </li>
                            <li>
                              Wind: <span id="wind">3</span> km/h
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="todays-icon col-12 col-sm-4"
                  src=""
                  id="icon"
                  alt="weather icon"
                />
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Open-source code on{" "}
        <a
          href="https://github.com/nbasekaylebo/weather-react-pt1"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        by Nastassja Basekay and hosted on
        <a
          href="https://agitated-jennings-527056.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
