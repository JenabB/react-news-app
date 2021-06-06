import { useState, useEffect } from "react";
import { getTeknologi } from "../api/endpoint";

const Headline = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getTeknologi().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      <h1>Headline</h1>
      <div className="grid grid-flow-col overflow-auto">
        {news.map((n) => (
          <div className="bg-blue-300 m-1 p-6 rounded-lg headline-card">
            <h1 className="line-clamp-4 text-sm">{n.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headline;
