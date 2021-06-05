import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Business from "./pages/Business";
import Entertaiment from "./pages/Entertaiment";
import Headline from "./pages/Headline";
import Health from "./pages/Health";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-200 py-4 sticky top-0">
          <ul className="flex overflow-auto font-bold">
            <li className="mx-2">
              <Link to="/">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Home
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/sports">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Sports
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/business">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Business
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/technology">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Technology
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/entertaiment">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Entertaiment
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/health">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Health
                </h1>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Headline />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="/entertaiment">
            <Entertaiment />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/search">
            <Health />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
