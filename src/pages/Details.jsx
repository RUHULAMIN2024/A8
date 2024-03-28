import { useLoaderData, useParams } from "react-router-dom";
import { saveReadItem, saveWishlist } from "../utils/localStorage";


const Details = () => {
    const books=useLoaderData();
    const {id}=useParams();
    const book=books.find(book=>book.bookId===parseInt(id));
    const {
        image,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating}=book;

        const handleRead=(book)=>{
            saveReadItem(book);
        }
        const handleWishlist=(book)=>{
            saveWishlist(book);
        }
        
    return (
        <section>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex rounded-xl bg-base-200 items-center justify-center p-10">
                    <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <article className="max-w-xl px-6 mx-auto space-y-16">
                    <div className="w-full mx-auto space-y-4">
                        <h1 className="text-4xl font-bold leading-none">{bookName}</h1>
                        <p className="text-sm dark:text-gray-600">By: {author}
                        </p>

                        <h3 className="py-3 border-t border-b">{category}</h3>
                        <p><span className="font-black">Review: </span>{review}</p>
                        <div className="flex pb-3 border-b text-green-500 space-x-5">
                            <span className="text-black font-black">Tag</span>
                        {
                            tags.map((tag,i)=><span key={i}>#{tag}</span>)
                        }
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table-sm">
                                {/* head */}
                                
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Number of Pages:</td>
                                    <td>{totalPages}</td>
                                </tr>
                                <tr>
                                    <td> Publisher:</td>
                                    <td>{publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year of Publishing:</td>
                                    <td>{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td>Rating:</td>
                                    <td>{rating}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <a onClick={()=>handleRead(book)} className="btn text-white bg-green-500 mr-3 hover:text-green-500">Read</a>
                            <a onClick={()=>handleWishlist(book)} className="btn text-white hover:text-blue-500 bg-blue-500">Wishlist</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Details;