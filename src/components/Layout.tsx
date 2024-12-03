import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="flex flex-grow flex-col lg:flex-row ">
        <aside className="w-full border-b border-gray-200 bg-gray-200 p-6 md:border-b-0 md:border-r lg:fixed lg:h-[100vh] lg:w-64">
          <Navigation />
        </aside>
        <main className="overflow-y-auto py-20 lg:mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
