import { useState, useEffect } from "react";
import { getInternasional } from "../api/endpoint";
import NewsResult from "../components/NewsResult";

const Internasional = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getInternasional().then((data) => {
      setNews(data.data);
    });
  }, []);

  return <NewsResult news={news} />;
};

export default Internasional;
