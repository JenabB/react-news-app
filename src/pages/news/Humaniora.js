import { useState, useEffect } from 'react';
import { getHumaniora } from '../../api/endpoint';
import NewsResult from '../../components/NewsResult';

const Humaniora = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getHumaniora().then((data) => {
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

export default Humaniora;
