"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/atoms/sidebar/sidebar";
import { useState } from "react";
import { Navbar } from "@/components/atoms/header/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Navbar title="Dashboard" />
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {/* <Footer /> */}
        Footer
      </footer>
    </>
  );
};

export default DashboardLayout;
