import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Williams.Co</div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contract"
              className="hover:text-gray-400 transition duration-300"
            >
              Contract
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-400 transition duration-300"
            >
              Cart
            </Link>
          </li>
        </ul>
        <div className="w-20"></div> {/* This empty div balances the layout */}
      </div>
    </nav>
  );
}
