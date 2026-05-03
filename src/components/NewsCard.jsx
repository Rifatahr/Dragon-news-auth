import { FaShareAlt, FaRegBookmark, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props;

  return (
    <div className=" card bg-base-100  mb-6">
      {/* Author Header */}
      <div className="flex items-center justify-between rounded-xl p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {news.author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          {news.title}
        </h2>

        <figure>
          <img
            src={news.image_url}
            alt="thumbnail"
            className="w-full h-80 object-cover rounded-md"
          />
        </figure>

        <p className="text-gray-600 text-sm">
          {news.details.slice(0, 150)}...{" "}
          <Link to={`/news/${news._id}`} className="text-orange-500 font-bold cursor-pointer">Read More</Link>
        </p>

        <hr className="border-gray-200" />

        {/* Footer Section */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-gray-600 font-medium">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;