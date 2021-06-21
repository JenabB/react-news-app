// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <nav className=" py-4 sticky top-0">
          <ul className="flex overflow-auto font-bold text-sm">
            <li className="mx-2">
              <Link to="/">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  IntisariIslam
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/khazanah">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Khazanah
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/ramadan">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Ramadan
                </h1>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/syariah">
                <h1 className="bg-white px-2 py-1 text-blue-600 rounded-lg">
                  Syariah
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
