import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Code } from "./pages/Code";
import { Photo } from "./pages/Photo";
import { Video } from "./pages/Video";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/code" component={Code}></Route>
          <Route exact path="/photos" component={Photo}></Route>
          <Route exact path="/videos" component={Video} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
