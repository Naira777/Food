import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/home" render={() => <Home />} />
    </>
  );
}

const JSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
};
export default JSApp;
