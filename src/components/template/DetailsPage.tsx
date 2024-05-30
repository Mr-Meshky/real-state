import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";

import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import { ProfileType } from "@/models/Profile";
import { englishToPersian, sp } from "@/utils/replaceNumber";

import ItemList from "../module/ItemList";
import ShareButton from "../module/ShareButton";
import Title from "../module/Title";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}: {
  data: ProfileType;
}) {
  return (
    <div className="flex mt-14">
      <div className="w-full">
        <h1 className="text-primary text-xl font-normal mb-2.5">{title}</h1>
        <span className="flex items-start h-4 mb-12 text-gray-500">
          <HiOutlineLocationMarker className="text-xl ml-1" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-12">{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className="w-[250px] m-10 [&>*]:shadow-[#304ffe4a_0px_4px_15px] [&>*]:p-2.5 [&>*]:rounded-xl [&>*]:mb-5">
        <div className="flex flex-col items-center">
          <SiHomebridge className="text-5xl text-primary mt-2.5 mb-5" />
          <p className="text-lg font-noraml">املاک {realState}</p>
          <span className="flex items-center text-gray-500 mt-5">
            <AiOutlinePhone className="text-[1.4rem] text-gray-500 ml-1" />
            {englishToPersian(phone)}
          </span>
        </div>
        <div className="hover:*:text-primary">
          <ShareButton />
        </div>
        <div className="flex flex-col items-center !pt-5">
          <p className="flex items-center text-gray-500 mb-5 h-5">
            <span className="*:text-2xl *:ml-1 *:text-primary">
              {icons[category]}
            </span>
            {categories[category]}
          </p>
          <p className="flex items-center text-gray-500 mb-5 h-5">
            {sp(price)} تومان
          </p>
          <p className="flex items-center text-gray-500 mb-5 h-5">
            <BiCalendarCheck className="text-2xl ml-1 text-primary" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
