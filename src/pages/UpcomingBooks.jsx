import Upcoming from "../components/Upcoming";

const UpcomingBooks = () => {
    return (
        <div>
            <h1 className="text-4xl text-center my-10 font-bold">Upcoming Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Upcoming></Upcoming>
                <Upcoming></Upcoming>
                <Upcoming></Upcoming>
            </div>
      
            
        </div>
    );
};

export default UpcomingBooks;