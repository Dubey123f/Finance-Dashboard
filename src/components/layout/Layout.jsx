import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Page */}
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;

