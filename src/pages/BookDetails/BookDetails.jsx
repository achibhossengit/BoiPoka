import { useLoaderData, useParams } from "react-router";
import {
  FaStar,
  FaRegStar,
  FaBookOpen,
  FaBookmark,
  FaBookReader,
} from "react-icons/fa";
import { addToStoreDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(id));
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleAddtoReadlist = (id) => {
    addToStoreDB(id)
  }

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md p-6">
        {/* Book Cover */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex bg-base-200 justify-center items-center py-5">
          <img
            src={image}
            alt={`Cover of ${bookName}`}
            className="rounded-lg transform skew-y-6 shadow-2xl h-auto max-h-96 object-contain"
          />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{bookName}</h1>
            <p className="text-xl text-gray-600">By: {author}</p>
          </div>

          {/* Category and Tags */}
          <div className="flex items-center gap-4 py-2 border-y border-gray-200">
            <span className="flex items-center text-green-600 font-medium">
              <FaBookOpen className="mr-2" /> {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Review</h3>
            <p className="text-gray-600">{review}</p>
          </div>

          {/* Book Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-gray-200">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium w-40">
                Number of Pages:
              </span>
              <span className="text-gray-600">{totalPages}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-medium w-40">Publisher:</span>
              <span className="text-gray-600">{publisher}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-medium w-40">
                Year Published:
              </span>
              <span className="text-gray-600">{yearOfPublishing}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-medium w-40">Rating:</span>
              <div className="flex items-center">
                <div className="flex mr-2">{renderStars(rating)}</div>
                <span className="text-gray-600">{rating.toFixed(1)}/5</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
            <button onClick={()=>handleAddtoReadlist(id)} className="cursor-pointer flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md">
              <FaBookReader className="mr-2" /> Add to Readlist
            </button>
            <button className="flex items-center px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition-colors">
              <FaBookmark className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
