import Navigation from "./Navigation";
import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
import "./App.css";
// import Search from "./pages/Search";
const App = () => {
  return (
    <div>
      <div
        className="flex justify-between px-4 bg-blue-300 text-center py-5"
        style={{ height: "70px" }}
      >
        <div></div>
        <h1 className="text-2xl font-bold text-white title-app">Berita</h1>
        <div>
          <FaSearch color="white" size="30" />
          {/* <Link to="/search">
            
          </Link> */}
        </div>
      </div>
      <Navigation />

      {/* <Route path="/search">
        <Search />
      </Route> */}
    </div>
  );
};

export default App;
