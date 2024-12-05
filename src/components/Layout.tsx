import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="flex flex-grow flex-col xl:flex-row ">
        <aside className="w-full border-b border-gray-200 bg-gray-200 p-6 md:border-b-0 md:border-r xl:fixed xl:h-[100vh] xl:w-64">
          <Navigation />
        </aside>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 xl:ml-[15vw] 2xl:ml-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
