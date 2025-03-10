import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <>
      <div
        className="flex items-center justify-around h-50 w-full rounded-xl
 gap-40 bg-gray-100 p-2 dark:bg-white/10"
      >
        {children}
      </div>
    </>
  );
}
