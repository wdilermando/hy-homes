import React, { useState } from 'react';

export default function Navbar() {
  const menuItems = ['Inicio', 'Todos os imoveis', 'Quem somos', 'Contato'];
  const activeMenu = 'Inicio';
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-24 py-8 mx-auto z-20">
        <a
          href="#"
          className="text-2xl md:text-4xl font-bold tracking-wide z-10"
        >
          HY homes
        </a>
        <div className="hidden md:flex items-center space-x-14">
          <ul className="flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className={`texl font-medium ${
                  activeMenu === menu ? 'font-bold text-blue-200' : ''
                } group`}
              >
                <a href="#">{menu}</a>
                <div className="h-0.5 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
              </li>
            ))}
          </ul>
          <button className="flex justify-center items-center py-2 px-7 font-medium text-white hover:text-gray-800 bg-transparent hover:bg-white border border-blue-50 rounded-md">
            Anunciar um imóvel
          </button>
        </div>

        <button
          className="md:hidden rounded-lg outline-none focus:outline-none focus:shadow-outline z-10"
          onClick={() => setOpen(!open)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {open ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button>
      </nav>
      {/* responsive menu */}
      <div
        className={`md:hidden flex items-center bg-blue-500 shadow-md rounded-sm p-3 text-gray-100 w-full z-9 absolute top-0 px-6 ${
          open ? 'scale-y-100' : 'scale-y-0'
        } origin-top rounded-full duration-300 ease-in-out`}
      >
        {open && (
          <ul className="py-4 pt-24">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="py-2 text-xl transition-opacity duration-700 ease-in-out"
              >
                <a href="#" className="font-semibold">
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
