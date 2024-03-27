import { useEffect } from "react";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import {getReadItem} from "../utils/localStorage";
import { Link } from "react-router-dom";

const ReadList = () => {

    const [readItems, setReadItem]=useState([]);
    useEffect(()=>{
        const storedList=getReadItem();
        setReadItem(storedList);
    },[]);

    
    return (
        <div>
            {
            readItems.map(item=>(
                <section key={item.bookId}>
            <div className="container mt-10 rounded-2xl bg-base-100 flex flex-col border shadow-xl justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
                <div className="flex rounded-xl bg-base-200 items-center justify-center p-10">
                    <img src={item.image} alt="" className="object-contain" />
                </div>
                <article className="max-w-2xl px-3 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
                    <div className="w-full mx-auto space-y-4">
                        <h1 className="text-5xl font-bold leading-none">{item.bookName}</h1>
                        <p className="text-sm dark:text-gray-600">By: {item.author}
                        </p>

                        <div className="flex pb-3 text-green-500 space-x-5">
                            <span className="text-black font-black">Tag</span>
                        {
                            item.tags.map((tag,i)=><span key={i}>#{tag}</span>)
                        }
                        <p className="flex space-x-2 text-black"><span><IoLocation /></span><span>Year of Publishing: {item.yearOfPublishing}</span></p>
                        </div>
                        <div className="flex gap-10 border-b pb-5">
                            <p className="flex items-center space-x-2"><span><FaUserFriends /></span> <span> Publisher: {item.publisher}</span></p>
                            <p className="flex items-center space-x-2"><span><MdContactPage /></span> <span> Page: {item.totalPages}</span></p>
                        </div>

                        
                        <div className="flex gap-10">
                            <p className="btn text-blue-500 bg-blue-100 rounded-full">Category: {item.category}</p>
                            <p className="btn bg-red-100 text-red-500 rounded-full">Rating: {item.rating}</p>
                            <Link to={`/${item.bookId}`} className="btn text-white bg-green-500 rounded-full">View Details</Link>
                        </div>
                        
                        
                        
                    </div>
                </article>
            </div>
        </section>
            ))
        }
        </div>
    );
};

export default ReadList;