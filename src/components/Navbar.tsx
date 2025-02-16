import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <NavLink to="/">Cat Gallery</NavLink>
        </div>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${
                isActive
                  ? 'text-yellow-400 font-bold underline underline-offset-4'
                  : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${
                isActive
                  ? 'text-yellow-400 font-bold underline underline-offset-4'
                  : ''
              }`
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
