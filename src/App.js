import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Audi from "./components/pages/audi/Audi";
import Bmw from "./components/pages/bmw/Bmw";
import Mercedes from "./components/pages/mercedes/Mercedes";
import Home from "./components/pages/HomePage/Home";
import Footer from "../src/components/pages/Footer/Footer";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import Form from "./components/pages/auth/Form";

const App = () => {
  return (
    // <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/audi" component={Audi} />
          <Route path="/bmw" component={Bmw} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/sign-up" component={Form} />
        </Switch>
        <Footer />
      </Router>
    // </Provider>
  );
};

export default App;
