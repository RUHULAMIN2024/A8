import { NavLink } from "react-router-dom";

const Nav = () => {


    return (
        <div className="navbar sticky top-0 z-10 my-3 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 bg-base-100 rounded-box w-52">
              <NavLink to="/" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Home</NavLink>
              <NavLink to="/listed-books" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Listed Books</NavLink>
              <NavLink to="/pages-to-read" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Pages to Read</NavLink>
              <NavLink to="/upcoming-books" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Upcoming Books</NavLink>
              <NavLink to="/about-us" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>About Us</NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost font-black text-green-500 text-2xl md:text-2xl">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu space-x-3 menu-horizontal px-1">
              <NavLink to="/" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Home</NavLink>
              <NavLink to="/listed-books" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Listed Books</NavLink>
              <NavLink to="/pages-to-read" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Pages to Read</NavLink>
              <NavLink to="/upcoming-books" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>Upcoming Books</NavLink>
              <NavLink to="/about-us" className={({isActive})=>isActive?'text-green-500 border-green-500 border p-2 rounded-xl font-bold':'font-bold p-2'}>About Us</NavLink>
              
            
            </ul>
          </div>
          <div className="hidden md:flex navbar-end">
            <a className="btn text-white bg-green-500 mr-3 hover:text-green-500">Sign In</a>
            <a className="btn text-white hover:text-blue-500 bg-blue-500">Sign Up</a>
          </div>
        </div>
    );
};

export default Nav;