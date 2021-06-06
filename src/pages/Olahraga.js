import { useState, useEffect } from "react";
import { getOlahraga } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Olahraga = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getOlahraga().then((data) => {
      console.log(data);
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Olahraga;
