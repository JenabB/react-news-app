import { useState, useEffect } from "react";
import { getEkonomi } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Ekonomi = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getEkonomi().then((data) => {
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Ekonomi;
