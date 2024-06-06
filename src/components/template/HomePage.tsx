import { ReactNode } from "react";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

import {
  categories as mainCategories,
  CategoriesType,
  cities,
  services,
} from "@/constants/strings";

import { CategoryCard } from "../module/CategoryCard";

const categories: any[] = Object.keys(mainCategories);

export const HomePage = (): ReactNode => {
  return (
    <div>
      <div className="flex justify-center items-center rounded-lg p-5 mt-24 flex-col-reverse lg:flex-row">
        <div className="w-full text-center text-primary">
          <h1 className="font-bold text-5xl mb-8">سامانه خرید و اجاره ملک</h1>
          <ul className="flex flex-wrap justify-center">
            {services.map((i: string) => (
              <li
                key={i}
                className="flex items-center w-20 m-2.5 bg-[#bbdefb] px-2.5 py-1"
              >
                <FiCircle />
                <span className="font-normal mr-1 h-5">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap my-12">
        {categories.map((i: keyof CategoriesType, index: number) => (
          <CategoryCard key={index} title={mainCategories[i]} name={i} />
        ))}
      </div>
      <div className="my-24">
        <h3 className="font-semibold text-[2rem] text-center text-primary">
          شهر های پر بازدید
        </h3>
        <ul className="flex justify-center lg:justify-between flex-wrap mt-12">
          {cities.map((i: string) => (
            <li
              key={i}
              className="bg-[#bbdefb] text-primary text-xl w-[250px] my-2.5 flex justify-center items-center p-2.5 rounded-lg"
            >
              <FaCity />
              <span className="h-7 mr-4 font-normal">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
