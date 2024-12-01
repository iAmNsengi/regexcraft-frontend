// src/components/Navigation/Navigation.tsx
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center overflow-x-scroll md:overflow-hidden md:flex-col md:space-y-4 ">
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
