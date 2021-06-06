import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ekonomi from "./pages/Ekonomi";
import Hiburan from "./pages/Hiburan";
import Nasional from "./pages/Nasional";
import Internasional from "./pages/Internasional";
import GayaHidup from "./pages/GayaHidup";
import Olahraga from "./pages/Olahraga";
import Teknologi from "./pages/Teknologi";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-200 py-4 sticky top-0">
          <ul className="flex overflow-auto font-bold text-sm">
            <li className="mx-2">
              <Link to="/">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Nasional
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/internasional">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Internasional
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/ekonomi">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Ekonomi
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/olahraga">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Olahraga
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/teknologi">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Teknologi
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/hiburan">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  Hiburan
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/gaya-hidup">
                <h1 className="bg-white px-2 py-1 text-blue-400 rounded-lg">
                  GayaHidup
                </h1>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Nasional />
          </Route>
          <Route path="/internasional">
            <Internasional />
          </Route>
          <Route path="/ekonomi">
            <Ekonomi />
          </Route>
          <Route path="/olahraga">
            <Olahraga />
          </Route>
          <Route path="/teknologi">
            <Teknologi />
          </Route>
          <Route path="/hiburan">
            <Hiburan />
          </Route>
          <Route path="/gaya-hidup">
            <GayaHidup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
