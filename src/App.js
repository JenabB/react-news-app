import { useState, useEffect } from "react";
import { newsApiBusiness } from "./api/endpoint";
import "./App.css";

const App = () => {
  const [news, setNews] = useState([]);

  console.log("news", news);
  useEffect(() => {
    newsApiBusiness().then((data) => {
      setNews(data.articles);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2">
        {news?.map((n, i) => (
          <div key={i} className="m-2 shadow">
            <img className="news-image" src={n.urlToImage} alt={n.title} />
            <div className="p-2">
              <h2 className="truncate">{n.title}</h2>
              <h1>{n.author}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
