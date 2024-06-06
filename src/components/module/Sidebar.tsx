import Link from "next/link";
import { HiFilter } from "react-icons/hi";

import {
  categories as mainCategories,
  CategoriesType,
} from "@/constants/strings";

import { SideBarProps } from "./type";

const categories: [] = Object.keys(mainCategories) as [];

export const Sidebar = ({ searchParams }: SideBarProps) => {
  return (
    <div className="flex flex-col">
      <p className="flex font-noraml text-lg">
        <HiFilter className="ml-1 text-lg !text-primary" />
        دسته بندی
      </p>
      <Link
        href="/buy-residential"
        className={`text-gray-500 m-1.5 ${
          !searchParams?.category ? "text-primary font-semibold" : ""
        }`}
      >
        همه
      </Link>
      {categories.map((i: keyof CategoriesType | undefined, index: number) => (
        <Link
          key={index}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
          className={`text-gray-500 m-1.5 ${
            searchParams?.category === i ? "text-primary font-semibold" : ""
          }`}
        >
          {i && mainCategories[i]}
        </Link>
      ))}
    </div>
  );
};
