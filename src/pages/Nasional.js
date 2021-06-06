import { useState, useEffect } from "react";
import { getNasional } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Nasional = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNasional().then((data) => {
      console.log("data", data);
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Nasional;
