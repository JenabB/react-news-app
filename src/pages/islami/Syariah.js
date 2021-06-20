import { useState, useEffect } from 'react';
import { getSyariah } from '../../api/endpoint';
import NewsResult from '../../components/NewsResult';

const Syariah = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getSyariah().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      {news.length === 0 ? (
        <div className="loader"></div>
      ) : (
        <NewsResult news={news} />
      )}
    </div>
  );
};

export default Syariah;
