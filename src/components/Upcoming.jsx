import { FaRegStar } from "react-icons/fa";

const Upcoming = () => {
    return (
        <div className="card bg-base-100 transition-all hover:scale-105 shadow-xl">
            <figure className="p-10 bg-base-200 ">
                <img src="/7.png" alt="Shoes" className="h-48 rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="flex text-green-500 space-x-5">
                   <span>#tag</span>
                   <span>#tag</span>
                   <span>#tag</span>
                </div>
                <h2 className="card-title text-2xl">bookName</h2>
                <p>By: author</p>
                <div className="flex mt-5 justify-between">
                    <p>category</p>
                    <div className="flex items-center space-x-3"><span>rating</span><span><FaRegStar /></span></div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;