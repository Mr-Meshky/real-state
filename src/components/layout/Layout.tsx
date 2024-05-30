import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[65vh]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
