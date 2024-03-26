import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BooksCard = ({book}) => {
    const {bookId, bookName, author, tags, category, image,rating}=book;
    return (
        <Link to={`/${bookId}`} className="card bg-base-100 transition-all hover:scale-105 shadow-xl">
            <figure className="p-10 bg-base-200 ">
                <img src={image} alt="Shoes" className="h-48 rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="flex text-green-500 space-x-5">
                   {
                    tags.slice(1,3).map((tag,i)=><span key={i}>{tag}</span>)
                   }
                </div>
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p>By: {author}</p>
                <div className="flex mt-5 justify-between">
                    <p>{category}</p>
                    <div className="flex items-center space-x-3"><span>{rating}</span><span><FaRegStar /></span></div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;