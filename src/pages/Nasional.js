import { useState, useEffect } from "react";
import { getNasional } from "../api/endpoint";

const Nasional = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNasional().then((data) => {
      console.log("data", data);
      setNews(data.data);
    });
  }, []);

  return (
    <div className="py-4">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {news?.map((n, i) => (
          <a href={n.link}>
            <div key={i} className="m-2 shadow rounded-lg">
              <img className="news-image" src={n.image.small} alt={n.title} />
              <div className="p-3">
                <h3 className="font-bold mb-3">{n.title}</h3>
                <h4 className="line-clamp-3">{n.contentSnippet}</h4>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nasional;
