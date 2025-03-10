import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutProps) {
  return <div className="flex flex-col gap-10">{children}</div>;
}
