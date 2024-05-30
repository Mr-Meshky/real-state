import type { IconType } from "react-icons";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

export type Icons = {
  [key in "villa" | "apartment" | "store" | "office"]: IconType;
};

const icons = {
  villa: <RiHome3Line />,
  apartment: <MdApartment />,
  store: <BiStore />,
  office: <GiOfficeChair />,
};

export { icons };
