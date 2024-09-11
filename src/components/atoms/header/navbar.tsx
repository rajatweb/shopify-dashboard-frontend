import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UserNav } from "./user-nav";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 text-zinc-700 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary dark:text-[#ffffff] ">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0 ">
          <h1 className="font-bold ">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
