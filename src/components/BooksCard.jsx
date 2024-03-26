
const BooksCard = ({book}) => {
    const {bookId, bookName, author, tags, category, image}=book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 bg-base-200  pt-10">
                <img src={image} alt="Shoes" className="h-60 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;