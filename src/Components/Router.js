import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Home from "Routes/Home";

export default () => (
  <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" exact component={Search} />
  </HashRouter>
);
