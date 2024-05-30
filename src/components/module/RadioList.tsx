import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface RadioListProps {
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
}

function RadioList({ profileData, setProfileData }: RadioListProps) {
  const { category } = profileData;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-1">دسته بندی</p>
      <div className="flex">
        <div className="flex items-center justify-evenly bg-secondary text-slate-100 ml-7 w-[70px] my-[3px] px-[5px] rounded-[5px] cursor-pointer">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-secondary text-slate-100 ml-7 w-[70px] my-[3px] px-[5px] rounded-[5px] cursor-pointer">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-secondary text-slate-100 ml-7 w-[70px] my-[3px] px-[5px] rounded-[5px] cursor-pointer">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-secondary text-slate-100 ml-7 w-[70px] my-[3px] px-[5px] rounded-[5px] cursor-pointer">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
