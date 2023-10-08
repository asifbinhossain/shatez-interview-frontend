"use client";

import NavigationNavbar from "@/components/navigation/navigation-navbar";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import NavigationSidebarMobile from "@/components/navigation/navigation-sidebar-mobile";
import { User } from "@/types";
import { useEffect, useState } from "react";

type NavigationProps = {
  user: User;
};

const Navigation: React.FC<NavigationProps> = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <NavigationSidebar />
      </div>
      <NavigationSidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <NavigationNavbar setSidebarOpen={setSidebarOpen} user={user} />
    </>
  );
};

export default Navigation;
