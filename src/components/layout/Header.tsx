"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export const Header = (): ReactNode => {
  const { data, status } = useSession();

  return (
    <header className="flex justify-between items-center p-5 my-5 rounded-xl bg-primary text-white">
      <div>
        <ul className="flex [&>*]:ml-2.5 lg:[&>*]:ml-8 hover:[&>*]:text-slate-400 [&>*]:transition [&>*]:duration-150">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>

      {status === "loading" ? (
        <div className="flex items-center text-primary bg-white py-1 px-2 transition duration-100 hover:text-white hover:bg-primary rounded w-10 h-8 animate-pulse"></div>
      ) : data ? (
        <div>
          <Link
            href={"/dashboard"}
            className="flex items-center text-primary bg-white py-1 px-2 transition duration-100 hover:text-white hover:bg-primary rounded"
          >
            <FaUserAlt className="text-2xl" />
          </Link>
        </div>
      ) : (
        <div>
          <Link
            href={"/signin"}
            className="flex items-center text-primary bg-white py-1 px-2 transition duration-100 hover:text-white hover:bg-primary rounded"
          >
            <FiLogIn className="text-2xl" />
            <span className="mr-1">ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};
