import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { icons } from "@/constants/icons";
import { ProfileType } from "@/models/Profile";
import { sp } from "@/utils/replaceNumber";

export const Card = ({
  data: { _id, category, title, location, price },
}: {
  data: ProfileType;
}) => {
  return (
    <div className="w-[250px] shadow-md shadow-primary hover:shadow-lg hover:shadow-primary border-b-2 border-secondary p-2.5 m-2.5 rounded-xl flex flex-col justify-between transition duration-200">
      <div className="[&>*]:text-3xl [&>*]:text-white [&>*]:bg-primary [&>*]:p-1 [&>*]:rounded">
        {icons[category]}
      </div>
      <p className="font-normal my-2.5">{title}</p>
      <p className="flex tet-gray-500 text-sm">
        <HiOutlineLocationMarker className="ml-2 text-base" />
        {location}
      </p>
      <span className="text-gray-500 block font-normal mt-2.5">
        {sp(price)} تومان
      </span>
      <Link
        href={`/buy-residential/${_id}`}
        className="flex items-center justify-between mt-5 font-noraml text-primary hover:text-secondary"
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-lg" />
      </Link>
    </div>
  );
};
