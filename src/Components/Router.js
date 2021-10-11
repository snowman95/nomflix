import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Home from "Routes/Home";

export default () => (
  <HashRouter>
    <Switch>
      {/* Switch는 오직 하나의 Route난 Render하게 해줌 */}
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Redirect from="*" to="/"></Redirect>
      {/* 일치하는 주소 없으면 Redirect 부분 작동  */}
    </Switch>
  </HashRouter>
);
