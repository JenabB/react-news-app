import moment from 'moment';

const NewsResultTribun = ({ news }) => {
  return (
    <div>
      <div className="py-4 lg:w-3/4 sm:w-full mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {news?.map((n, i) => (
            <a href={n.link}>
              <div key={i} className="m-2 shadow rounded-lg">
                <img
                  className="news-image w-full"
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-3">{n.title}</h3>
                  <h4 className="line-clamp-3 text-xs">{n.contentSnippet}</h4>
                </div>
                <h5 className="px-3 pb-3 text-xs">
                  {moment(n.isoDate).fromNow()}
                </h5>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsResultTribun;
