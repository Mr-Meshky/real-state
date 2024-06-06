"use client";

import { usePathname } from "next/navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";

export const ShareButton = () => {
  const pathname = usePathname();

  return (
    <CopyToClipboard text={pathname}>
      <div className="flex items-center justify-center cursor-pointer">
        <LuShare2 className="ml-2.5 text-lg text-primary" />
        <button className="bg-none text-base text-gray-500 h-5 transition duration-100 cursor-pointer hover:text-primary">
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
};
