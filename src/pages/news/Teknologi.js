import { useState, useEffect } from "react";
import { getTeknologi } from "../../api/endpoint";
import NewsResult from "../../components/NewsResult";

const Teknologi = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getTeknologi().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      {news.length === 0 ? (<div className="loader"></div>): (<NewsResult news={news} />)}
    </div>
    );
};

export default Teknologi;
