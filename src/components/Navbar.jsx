import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart,AiOutlineCloseCircle, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black py-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img
          src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Categories and Account/Cart (for larger screens) */}
      <div className='gap-4 hidden md:hidden lg:flex'>
      <div className="relative group ">
          <span className="hover:text-gray-300 cursor-pointer flex flex-row items-center">
            Categories{' '}
            <svg
              className="h-5 w-5 text-gray-400 group-hover:text-gray-300 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div className="absolute bg-white py-2 px-4 z-10 rounded-lg shadow-lg top-6 hidden group-hover:block transition duration-300">
            <Link to="/adidas" className="block hover:text-gray-300">
              Adidas
            </Link>
            <Link to="/puma" className="block hover:text-gray-300">
              Puma
            </Link>
            <Link to="/nike" className="block hover:text-gray-300">
              Nike
            </Link>
          </div>
        </div>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        </div>
        <div className="bg-gray-200 rounded-full px-4 items-center hidden md:hidden lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full focus:outline-none bg-transparent"
            />
            <button className="py-2 px-0">
             <AiOutlineSearch color='black' size={25} />
            </button>
          </div>
      <div className="hidden md:flex space-x-4">
        
        <Link to="#" className="hover:text-gray-300 flex flex-row items-center gap-2">
          <AiOutlineUser />
          Account
        </Link>
        <Link to="#" className="hover:text-gray-300 flex flex-row items-center gap-2">
          <AiOutlineShoppingCart />
          Cart
        </Link>
      </div>

      {/* Hamburger Menu (for smaller screens) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-1 focus:text-black-300 self-end"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Hamburger Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-black p-4 flex flex-col space-y-4"style={{ zIndex: 100 }}>
          <div className="md:hidden flex items-center justify-end">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-1 focus:text-black-300 self-end p-0"
        >
          <AiOutlineCloseCircle size={25} color='black' />
        </button>
      </div>
          <div className="group">
            <span className="text-black cursor-pointer flex justify-between">
              Categories{' '}
              <svg
                className="h-5 w-5 text-gray-400 group-text-black transition duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div className="absolute bg-black py-2 px-4 rounded-lg shadow-lg top-8 hidden group-block transition duration-300">
              <Link to="/adidas" className="block text-black">
                Adidas
              </Link>
              <Link to="/puma" className="block text-black">
                Puma
              </Link>
              <Link to="/nike" className="block text-black">
                Nike
              </Link>
            </div>
          </div>
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/products" className="text-black">
            Products
          </Link>
          <div className="bg-[#003d2a] rounded-lg px-2 flex items-center md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full focus:outline-none bg-transparent"
            />
            <button className="ml-2">
             <AiOutlineSearch color='white' size={25} />
            </button>
          </div>
          <Link to="#" className="text-black">
            Account
          </Link>
          <Link to="#" className="text-black">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
