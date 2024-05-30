import "./globals.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import Layout from "@/components/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { yekan } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "خانه‌پیدا",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`container mx-auto px-2 lg:px-0 ${yekan.className}`}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
        <NextTopLoader
          color="#028391"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #028391,0 0 5px #028391"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
      </body>
    </html>
  );
}
