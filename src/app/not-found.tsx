"use client";

import { Metadata } from "next";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[55vh]">
      <h1 className="text-9xl font-bold">404</h1>
      <h4 className="mt-5 text-xl">این راه به جایی نمی‌رسد!</h4>
      <p className="mt-2 mb-3 text-2xl">به نظر آدرس را اشتباه وارد کرده‌اید.</p>
      <Link
        href="/"
        className="border-2 border-primary rounded px-4 py-2 hover:bg-primary hover:text-white"
      >
        رفتن به خانه
      </Link>
    </div>
  );
}

export const generateMetadata = (): Metadata => {
  return {
    title: "خانه‌پیدا | اشتباه اومدی",
    icons: { icon: "./favicon.ico" },
  };
};
