import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";

import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setshowsearch} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
     <Link to='/'> <img src={assets.Logo_icon} className="w-35" alt="" /> </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-black">
        <NavLink to="/" className="flex flex-col items-center gap-2">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px]  hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-2">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-2">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-2">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        <img onClick={()=>setshowsearch(true)} src={assets.searchicon} className="w-6 cursor-pointer" alt="" />

        <div className="group relative">
         <Link to='/login'> <img className="w-6 cursor-pointer" src={assets.user_icon} alt="" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-5">
            <div className="flex flex-col gap-2 w-36 px-5 bg-slate-200 text-gray-900 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-4 min-w-6" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center loading-5 bg-black text-white aspect-square rounded-full text-[7px]">
            1
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.back_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
