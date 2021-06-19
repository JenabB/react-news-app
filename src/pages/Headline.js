import { useState, useEffect } from "react";
import { getTeknologi } from "../api/endpoint";

const Headline = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getTeknologi().then((data) => {
      setNews(data.data);
    });
  }, []);

  return (
    <div>
      <h1 className="px-3 text-blue-600 font-bold text-xl">Headline</h1>
      <div className="grid grid-flow-col overflow-auto">
        {news.length !== 0 ?
        
        news.map((n) => (
          <div className="bg-blue-600 m-1 p-6 rounded-lg headline-card">
            <h1 className="line-clamp-4 text-sm text-white font-bold">
              {n.title}
            </h1>
          </div>
        )): (
         
          <div className="grid grid-flow-col overflow-auto">
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
            <div className="loader-headline headline-card"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headline;
