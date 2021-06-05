import { useState, useEffect } from "react";
import { getTechnology } from "../api/endpoint";

const Technology = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getTechnology().then((data) => {
      setNews(data.articles);
    });
  }, []);

  return (
    <div className="py-4">
      <div className="grid grid-cols-2">
        {news?.map((n, i) => (
          <div key={i} className="m-2 shadow rounded-lg">
            <img className="news-image" src={n.urlToImage} alt={n.title} />

            <div className="p-2">
              <h1 className="my-2">{n.source.name}</h1>
              <h3 className="line-clamp-3">{n.title}</h3>
              <h1>{n.author}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
