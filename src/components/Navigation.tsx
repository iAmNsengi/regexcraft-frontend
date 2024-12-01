// src/components/Navigation/Navigation.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col space-y-4">
      <div className="relative">
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-left bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          Documentation
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <NavLink to="/docs" className="block px-4 py-2 hover:bg-gray-100">
              Getting Started
            </NavLink>
            <NavLink
              to="/examples"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Examples
            </NavLink>
            <NavLink
              to="/playground"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Playground
            </NavLink>
          </div>
        )}
      </div>
      <NavLink to="/" className="px-4 py-2 rounded-md hover:bg-gray-200">
        Home
      </NavLink>
      <NavLink to="/about" className="px-4 py-2 rounded-md hover:bg-gray-200">
        About
      </NavLink>
      <a
        href="https://github.com/iAmNsengi/regexcraft"
        className="px-4 py-2 rounded-md hover:bg-gray-200"
      >
        GitHub
      </a>
    </nav>
  );
};

export default Navigation;
