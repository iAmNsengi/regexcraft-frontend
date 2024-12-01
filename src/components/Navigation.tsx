// src/components/Navigation/Navigation.tsx
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex flex-col space-y-4">
      <NavLink to="/docs" className="px-4 py-2 rounded-md hover:bg-gray-200">
        Documentation
      </NavLink>
      <NavLink
        to="/examples"
        className="px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Examples
      </NavLink>
      <NavLink
        to="/playground"
        className="px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Playground
      </NavLink>
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
