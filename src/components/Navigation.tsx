// src/components/Navigation/Navigation.tsx
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="lg:ml -ml-5 flex w-screen items-center justify-center lg:w-full lg:flex-col lg:space-y-4 lg:overflow-hidden">
      <img
        className="hidden h-10 w-10 scale-125 md:block lg:mb-10 lg:mt-5 lg:h-20 lg:w-20"
        src="/regex-craft-logo.png"
        alt="Regex Craft Logo"
      />
      <NavLink
        to="/"
        className="rounded-md px-1 py-2 hover:bg-gray-200 md:px-4"
      >
        Home
      </NavLink>
      <NavLink
        to="/examples"
        className="rounded-md px-1 py-2 hover:bg-gray-200 md:px-4"
      >
        Examples
      </NavLink>
      <NavLink
        to="/playground"
        className="rounded-md px-1 py-2 hover:bg-gray-200 md:px-4"
      >
        Playground
      </NavLink>

      <NavLink
        to="/about"
        className="rounded-md px-1 py-2 hover:bg-gray-200 md:px-4"
      >
        About
      </NavLink>
      <Link
        to="https://github.com/iAmNsengi/regexcraft"
        className="rounded-md px-4 py-2 hover:bg-gray-200"
      >
        GitHub
      </Link>
    </nav>
  );
};

export default Navigation;
