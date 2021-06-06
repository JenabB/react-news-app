import { useState, useEffect } from "react";
import { getTeknologi } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Teknologi = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getTeknologi().then((data) => {
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Teknologi;
