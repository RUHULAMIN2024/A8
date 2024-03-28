import { useEffect } from "react";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import {getWishlist} from "../utils/localStorage";
import { Link } from "react-router-dom";
const Wishlist = () => {
    const [readItems, setReadItem]=useState([]);
    useEffect(()=>{
        const storedList=getWishlist();
        setReadItem(storedList);
    },[]);

    const handleSelect=(e)=>{
        let item=[...readItems]
        if(e.target.value==='rating'){
            item.sort((a,b)=>{
                return b.rating-a.rating
             });
        }else if(e.target.value==='numberOfPages'){
            item.sort((a,b)=>{
                return b.totalPages-a.totalPages
             });
        }else if(e.target.value==='publishedYear'){
            item.sort((a,b)=>{
                return b.yearOfPublishing-a.yearOfPublishing
             });            
        }
        setReadItem(item);
    }

    return (
        <div>
            <div className="text-center my-5">
            <select onChange={handleSelect} className="select text-2xl text-white bg-green-500 select-success border-none  ">
                <option defaultValue>Sort By</option>
                <option value={'rating'}>Rating</option>
                <option value={'numberOfPages'}>Number of pages</option>
                <option value={'publishedYear'}>Published year</option>
                
            </select>
            </div>
            {
            readItems.map(item=>(
                <section key={item.bookId}>
            <div className="container gap-16 mt-10 rounded-2xl bg-base-100 flex flex-col border shadow-xl justify-center p-6 mx-auto sm:py-12 lg:flex-row">
                <div className="flex rounded-xl bg-base-200 justify-center p-10">
                    <img src={item.image} alt="" className="object-contain" />
                </div>
                <article className="max-w-2xl md:px-3 space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold leading-none">{item.bookName}</h1>
                        <p className="text-sm dark:text-gray-600">By: {item.author}
                        </p>

                        <div className="flex flex-col md:flex-row pb-3 text-green-500 space-x-5">
                            <span className="text-black font-black">Tag</span>
                        {
                            item.tags.map((tag,i)=><span key={i}>#{tag}</span>)
                        }
                        <p className="flex flex-col md:flex-row space-x-2 text-black"><span><IoLocation /></span><span>Year of Publishing: {item.yearOfPublishing}</span></p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 border-b pb-5">
                            <p className="flex items-center space-x-2"><span><FaUserFriends /></span> <span> Publisher: {item.publisher}</span></p>
                            <p className="flex items-center space-x-2"><span><MdContactPage /></span> <span> Page: {item.totalPages}</span></p>
                        </div>

                        
                        <div className="flex flex-col md:flex-row gap-10">
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

export default Wishlist;