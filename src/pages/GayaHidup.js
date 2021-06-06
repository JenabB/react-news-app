import { useState, useEffect } from "react";
import { getGayaHidup } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const GayaHidup = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getGayaHidup().then((data) => {
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default GayaHidup;
