import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Vehicles from "./components/Vehicles";
import Audi from "../src/components/pages/audi/Audi";
import Bmw from "../src/components/pages/bmw/Bmw";
import Mercedes from "../src/components/pages/mercedes/Mercedes";

import "./App.css";

export class App extends Component {
  state = {
    vehicles: [
      {
        id: 1,
        name: "Audi",
      },
      {
        id: 2,
        name: "Mercedes",
      },
      {
        id: 3,
        name: "BMW",
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => <Vehicles vehicles={this.state.vehicles} />}
            />
            <Route path="/Audi" component={Audi} />
            <Route path="/Bmw" component={Bmw} />
            <Route path="/Mercedes" component={Mercedes} />
          </div>
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
