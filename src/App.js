import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import ContactUs from "./components/pages/ContactUs";

import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
