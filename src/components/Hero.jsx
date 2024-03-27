import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-base-200 rounded-3xl">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
					<h1 className="text-5xl font-bold leading-none sm:text-6xl">Books to freshen up your bookshelf
					</h1>
					
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						
						<Link to='/listed-books' className="px-8 py-3 text-lg font-semibold mt-8 text-white bg-green-500 rounded-xl">View The List</Link>
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img src="/1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
				</div>
			</div>
		</section>
    );
};

export default Hero;