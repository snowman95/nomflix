import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Home from "Routes/Home";
import Header from "Components/Header";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        {/* Switch는 오직 하나의 Route난 Render하게 해줌 */}
        <Route path="/" exact component={Home} />
        {/* exact 를 넣지않으면 tv로 시작하는 아무주소가 다 매칭됨 */}
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/"></Redirect>
        {/* 일치하는 주소 없으면 Redirect 부분 작동  */}
      </Switch>
    </>
  </HashRouter>
);
