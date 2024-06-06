import { ReactNode } from "react";

export interface DashboardSidebarProps {
  children: ReactNode;
  email: string;
  role: "ADMIN" | "USER";
}
