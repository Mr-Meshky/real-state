import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { ProfileType } from "@/models/Profile";
import { persianToEnglish } from "@/utils/replaceNumber";

interface TextInputProps {
  title: string;
  name: keyof ProfileType;
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
  textarea?: boolean;
}

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}: TextInputProps) {
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: persianToEnglish(value) });
  };

  return (
    <div>
      <p className="text-lg mb-1">{title}</p>
      {textarea ? (
        <textarea
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="h-[100px] mb-10 w-[300px] border border-primary border-dashed text-gray-500 rounded p-2.5 text-base focus:outline-none focus:border-solid"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="mb-10 w-[300px] border border-primary border-dashed text-gray-500 rounded p-2.5 text-base focus:outline-none focus:border-solid h-10"
        />
      )}
    </div>
  );
}

export default TextInput;
