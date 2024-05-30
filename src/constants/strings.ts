export type ServicesType = ["خرید", "فروش", "رهن", "اجاره"];
export type CitiesType = [
  "تهران",
  "قزوین",
  "گیلان",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
];
export type CategoriesType = {
  [key in "villa" | "apartment" | "store" | "office"]: string;
};

export const services: ServicesType = ["خرید", "فروش", "رهن", "اجاره"];
export const cities: CitiesType = [
  "تهران",
  "قزوین",
  "گیلان",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
];

export const categories: CategoriesType = {
  villa: "ویلا",
  apartment: "آپارتمان",
  store: "فروشگاه",
  office: "دفتر",
};
