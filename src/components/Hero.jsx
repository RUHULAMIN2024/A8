import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero min-h-[550px] rounded-3xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/h.png" className="max-w-sm rounded-lg" />
                <div className="space-y-4">
                <h2 className="text-5xl font-bold">Books to freshen up </h2>
                <h2 className="text-5xl pb-8 font-bold">your bookshelf</h2>
                <Link to="/listed-books"><button className="btn text-white hover:text-green-500 hover:border-green-500 bg-green-500">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;