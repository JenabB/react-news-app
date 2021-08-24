import { useState, useEffect } from "react";
import CONFIG from "../../api/config";
import NewsResult from "../../components/NewsResult";

const Search = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.value);
  };

  useEffect(() => {
    fetch(`${CONFIG.SEARCH_URL}${query}`)
      .then((response) => response.json())
      .then((data) => setNews(data.data))
      .catch((error) => console.log(error.response));
  }, [query]);

  return (
    <div>
      <div
        className="flex justify-between px-4 bg-blue-600 text-center py-5"
        style={{ height: "70px" }}
      >
        <div></div>
        <div>
          <input
            className="rounded px-4 py-1 w-3/4"
            type="search"
            placeholder="search news"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div></div>
      </div>

      <NewsResult news={news} />
    </div>
  );
};

export default Search;
