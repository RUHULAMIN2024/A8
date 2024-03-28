import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {


    const [tab, setTab]=useState(0);
    return (
        <div>
            <h2 className="text-5xl font-bold text-center bg-base-200 py-8 rounded-xl">Books</h2>
            

            <div className="flex items-center my-10 -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap">
                <Link onClick={()=>setTab(0)} to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===0?"border border-b-0":"border-b"} rounded-t-lg border-gray-400`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    
                    <span>Read Books</span>
                </Link>
                <Link onClick={()=>setTab(1)} to={`wishlist`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===1?"border border-b-0":"border-b"} rounded-t-lg border-gray-400`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>   
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;