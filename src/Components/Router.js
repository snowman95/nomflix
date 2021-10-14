import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV/TVContainer";
import Search from "Routes/Search/SearchContainer";
import Detail from "Routes/Detail/DetailContainer";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        {/* Switch는 오직 하나의 Route난 Render하게 해줌 */}
        <Route path="/" exact component={Home} />
        {/* exact 를 넣지않으면 tv로 시작하는 아무주소가 다 매칭됨 */}
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
        <Redirect from="*" to="/" />
        {/* 일치하는 주소가 하나도 없으면 Redirect 부분 작동  */}
      </Switch>
    </>
  </Router>
);
