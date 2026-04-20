import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = ({ handleScroll, setSearchTerm , isScrolled , handlePanel, totalItems, wishlist}) => {
  return (
    <header className={`bg-red-200 fixed top-0 left-0 right-0 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-325 px-12  mx-auto h-[14vh] flex items-center justify-between">
        {/* logo */}
        <a href="#" className="flex w-15 h-15 bg-zinc-100 rouded-full p-2">
          <img src={Logo} alt="" className="w-full h-full object-contain" />
        </a>

        {/* nav action  */}
        <div className="flex item-center gap-x-5">
          {/* search bar */}
          <div className="flex p-1 rounded-full border-2 border-blue-600 ">
            <input
              type="text"
              name="search "
              id="search"
              placeholder="search..."
              autoComplete="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl">
              <IoSearch />
            </button>
          </div>

          {/* icons */}
          <button className="text-[1.7rem] text-zinc-800 relative cursor-pointer " onClick={()=>handlePanel('wishlist')}>
            <GoHeartFill />
            {
              wishlist.length > 0 &&
               <span className="flex justify-center item-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-7 right-3 border-2 border-white" >
              {wishlist.length}
            </span>
            }
           
          </button>

          <button className="text-[1.7rem] text-zinc-800 relative cursor-pointer"  onClick={()=>handlePanel('cart')}>
            <HiShoppingBag />
            {
              totalItems >0 &&
              <span className="flex justify-center item-center bg-red-600 text-white w-5 h-5 rounded-full text-[13px] absolute top-7 right-3 border-2 border-white">
              {totalItems}
            </span>
            }
            
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
