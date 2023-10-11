"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Main from "./Main";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* Sidebar */}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Area */}

      <div className="lg:pl-72">
        {/* Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Your content */}
            <Main />
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
