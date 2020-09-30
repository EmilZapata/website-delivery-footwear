import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHome from "./home";
import PageLogin from "./login";

export default function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/login" component={PageLogin} />
      </Switch>
    </BrowserRouter>
  );
}
