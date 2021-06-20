import { useState, useEffect } from "react";
import { getInternasional } from "../../api/endpoint";
import NewsResult from "../../components/NewsResult";

const Internasional = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getInternasional().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      {news.length === 0 ? (<div className="loader"></div>): (<NewsResult news={news} />)}
    </div>
    );
};

export default Internasional;
