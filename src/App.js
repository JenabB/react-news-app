import Navigation from "./Navigation";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="bg-blue-300 text-center py-5" style={{ height: "80px" }}>
        <h1 className="text-lg font-bold text-white">Berita</h1>
      </div>
      <Navigation />
    </div>
  );
};

export default App;
