import { useState, useEffect } from "react";
import { getIslamDigest } from "../../api/endpoint";
import NewsResult from "../../components/NewsResult";

const IslamDigest = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getIslamDigest().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      {news.length === 0 ? (<div className="loader"></div>): (<NewsResult news={news} />)}
    </div>
    );
};

export default IslamDigest;
