import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <p className="text-sm">
              &copy; 2024 Williams.Co. All rights reserved.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
