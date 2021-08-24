// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Headline from "./pages/news/Headline";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        className="flex justify-between px-4 bg-blue-600 text-center py-5"
        style={{ height: "70px" }}
      >
        <div></div>
        <h1 className="text-2xl font-bold text-white title-app">Berita</h1>
        <div>
          <Link to="/search">
            <h1 className="material-icons md-24 flex justify-center text-white">
              search
            </h1>
          </Link>
        </div>
      </div>

      <div className="p-2">
        <Headline />
      </div>
      <div>
        <nav className=" py-4 sticky top-0">
          <ul className="flex overflow-auto font-bold text-sm">
            <li className="mx-2">
              <Link to="/">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Nasional
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/internasional">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Internasional
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/ekonomi">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Ekonomi
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/olahraga">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Olahraga
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/teknologi">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Teknologi
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/hiburan">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Hiburan
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/gaya-hidup">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  GayaHidup
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/humaniora">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Humaniora
                </h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default Layout;
