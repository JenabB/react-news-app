import { useState, useEffect } from 'react';
import { getRamadan } from '../../api/endpoint';
import NewsResultTribun from '../../components/NewsResultTribun';

const Ramadan = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getRamadan().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      {news.length === 0 ? (
        <div className="loader"></div>
      ) : (
        <NewsResultTribun news={news} />
      )}
    </div>
  );
};

export default Ramadan;
