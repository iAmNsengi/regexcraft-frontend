import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex flex-grow flex-col lg:flex-row  ">
        <aside className="lg:fixed lg:h-[100vh] w-full lg:w-64 bg-gray-200 border-b md:border-r border-gray-200 p-6 md:border-b-0">
          <Navigation />
        </aside>
        <main className="flex-1 lg:ml-[15vw] 2xl:ml-auto  p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
