import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow-xl">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <Link
              to="/"
              aria-label="Neat Bangladesh"
              title="Neat Bangladesh "
              className="inline-flex items-center"
            >
              <span className="ml-2 tracking-wide text-2xl font-bold text-emerald-600">
                Neat Bangladesh
              </span>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  to="/dashboard"
                  aria-label="dashboard"
                  title="Dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-emerald-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-emerald-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <NavLink
                  to="/login"
                  aria-label="Get Involved"
                  title="Get Involved"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-emerald-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  }
                >
                  Get Involved
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
