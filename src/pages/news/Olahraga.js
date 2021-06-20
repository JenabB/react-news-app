import { useState, useEffect } from "react";
import { getOlahraga } from "../../api/endpoint";
import NewsResult from "../../components/NewsResult";

const Olahraga = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getOlahraga().then((data) => {
      setNews(data.data);
    });
  }, []);
  
  return (
    <div>
      {news.length === 0 ? (<div className="loader"></div>): (<NewsResult news={news} />)}
    </div>
    );
};

export default Olahraga;
