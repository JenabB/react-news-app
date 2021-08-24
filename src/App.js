import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./News";
import Islami from "./Islami";
import Tentang from "./pages/tentang/Tentang";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tentang" component={Tentang} />
          <Route path="/islami" component={Islami} />
          <Route path="/" component={News} />
        </Switch>

        <nav>
          <ul className="flex text-white font-bold fixed bg-blue-600 bottom-0 w-full justify-evenly">
            <li className="p-2">
              <Link to="/">
                <h1 className="material-icons md-24 flex justify-center">
                  feed
                </h1>
                <h1>Berita</h1>
              </Link>
            </li>
            <li className="p-2">
              <Link to="/islami">
                <h1 className="material-icons md-24 flex justify-center">
                  dark_mode
                </h1>
                <h1>Islami</h1>
              </Link>
            </li>
            <li className="p-2">
              <Link to="/tentang">
                <h1 className="material-icons md-24 flex justify-center">
                  info
                </h1>
                <h1>Info</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
