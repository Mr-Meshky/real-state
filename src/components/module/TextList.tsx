import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

interface TextList {
  title: string;
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
  type: "amenities" | "rules";
}

function TextList({ title, profileData, setProfileData, type }: TextList) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index: number) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-1">{title}</p>
      {profileData[type].map((i: string, index: number) => (
        <div className="flex my-2.5" key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
            className="w-[300px] border border-primary border-dashed text-gray-500 rounded p-2.5 text-base ml-2.5 h-8"
          />
          <button
            onClick={() => deleteHandler(index)}
            className="text-danger border border-danger flex items-center leading-[10px] text-base rounded transition duration-100 cursor-pointer hover:scale-105 px-2"
          >
            حذف
            <AiOutlineDelete className="mr-1 text-lg" />
          </button>
        </div>
      ))}
      <button
        onClick={addHandler}
        className="bg-primary text-white text-base rounded transition duration-100 cursor-pointer hover:scale-105 mt-5 flex py-1 px-2"
      >
        افزودن
        <MdOutlineLibraryAdd className="mr-1 text-lg" />
      </button>
    </div>
  );
}

export default TextList;
