import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex flex-col space-y-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition ${
            isActive
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/docs"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition ${
            isActive
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        Documentation
      </NavLink>
      {/* Add other links */}
    </nav>
  );
};

export default Navigation;
