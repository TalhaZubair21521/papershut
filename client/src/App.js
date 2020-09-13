import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

// const newContext = React.createContext({
//   Email: "",
//   Phone: "",
//   DocumentType: "",
//   AcademicLevel: "",
//   Date: "",
//   Time: "",
//   Pages: "",
//   AcademicLevelId: 0,
//   deadline: 0,
//   NoOfPages: 0
// });

// const information = useContext(newContext);

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Order" component={Order} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
