import Navigation from "./Navigation";
import { FaSearch } from "react-icons/fa";
import "./App.css";

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
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default App;
