import { useLoaderData } from "react-router-dom";
import BooksCard from "../components/BooksCard";
import Hero from "../components/Hero";


const Home = () => {

    const books=useLoaderData()
    console.log(books)
    return (
        <div>
            <Hero></Hero>
            <h2 className="text-4xl font-bold text-center mt-20 mb-10">Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book=><BooksCard key={book.bookId} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Home;