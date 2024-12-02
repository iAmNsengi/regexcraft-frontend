// src/components/Navigation/Navigation.tsx
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center lg:overflow-hidden lg:flex-col lg:space-y-4 w-screen -ml-5 lg:ml lg:w-full">
      <img
        className="h-10 w-10 hidden md:block scale-125 lg:mb-10 lg:mt-5 lg:h-20 lg:w-20"
        src="/regex-craft-logo.png"
        alt="Regex Craft Logo"
      />
      <NavLink
        to="/"
        className="px-1 md:px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Home
      </NavLink>
      <NavLink
        to="/examples"
        className="px-1 md:px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Examples
      </NavLink>
      <NavLink
        to="/playground"
        className="px-1 md:px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Playground
      </NavLink>

      <NavLink
        to="/about"
        className="px-1 md:px-4 py-2 rounded-md hover:bg-gray-200"
      >
        About
      </NavLink>
      <Link
        to="https://github.com/iAmNsengi/regexcraft"
        className="px-4 py-2 rounded-md hover:bg-gray-200"
      >
        GitHub
      </Link>
    </nav>
  );
};

export default Navigation;
