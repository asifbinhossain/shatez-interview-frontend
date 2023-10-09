"use client";

import NavigationNavbar from "@/components/navigation/navigation-navbar";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import NavigationSidebarMobile from "@/components/navigation/navigation-sidebar-mobile";
import { useState } from "react";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <NavigationSidebar />
      </div>
      <NavigationSidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <NavigationNavbar setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Navigation;
