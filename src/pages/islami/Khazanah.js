import { useState, useEffect } from 'react';
import { getKhazanah } from '../../api/endpoint';
import NewsResult from '../../components/NewsResult';

const Khazanah = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getKhazanah().then((data) => {
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

export default Khazanah;
