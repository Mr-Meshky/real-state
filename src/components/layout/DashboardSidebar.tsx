import Link from "next/link";
import { AwaitedReactNode, ReactNode } from "react";
import { CgProfile } from "react-icons/cg";

import { LogoutButton } from "../module/LogoutButton";

interface DashboardSidebarProps {
  children: ReactNode;
  email: string;
  role: "ADMIN" | "USER";
}

export const DashboardSidebar = async ({
  children,
  email,
  role,
}: DashboardSidebarProps): Promise<AwaitedReactNode> => {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-3.5 rounded-xl shadow-[#304ffe4a_0px_4px_15px] ]w-full mx-auto lg:ml-10 lg:w-[220px]">
        <CgProfile className="text-5xl text-primary" />
        {role === "ADMIN" ? "ادمین" : null}
        <p className="text-gray-500 text-xl font-normal mt-5">{email}</p>
        <span className="w-full h-[1px] bg-slate-100 mb-8"></span>
        <Link
          className="my-1 text-normal w-full hover:text-gray-500"
          href={"/dashboard"}
        >
          حساب کاربری
        </Link>
        <Link
          className="my-1 text-normal w-full hover:text-gray-500"
          href={"/dashboard/my-profiles"}
        >
          آگهی های من
        </Link>
        <Link
          className="my-1 text-normal w-full hover:text-gray-500"
          href={"/dashboard/add"}
        >
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link
            href={"/admin"}
            className="my-1 text-normal w-full hover:text-gray-500"
          >
            در انتظار تایید
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
