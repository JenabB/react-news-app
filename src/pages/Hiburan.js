import { useState, useEffect } from "react";
import { getHiburan } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Hiburan = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getHiburan().then((data) => {
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Hiburan;
