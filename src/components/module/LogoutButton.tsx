"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";
import { FiLogOut } from "react-icons/fi";

export const LogoutButton = (): ReactNode => {
  const logOutHandler = async (): Promise<void> => {
    await signOut();
  };

  return (
    <button
      className="flex bg-none border-none mt-5 w-full text-center text-xl text-[rgb(219,5,5)] cursor-pointer"
      onClick={logOutHandler}
    >
      <FiLogOut className="!text-xl ml-1 !text-[rgb(219,5,5)]" />
      خروج
    </button>
  );
};
