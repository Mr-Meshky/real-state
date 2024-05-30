"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

function NextAuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
