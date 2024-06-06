"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

import { ProfileType } from "@/models/Profile";
import { sp } from "@/utils/replaceNumber";

export const AdminCard = ({
  data: { _id, title, description, location, price },
}: {
  data: ProfileType;
}) => {
  const router = useRouter();

  const publishHandler = async () => {
    try {
      const { data }: { data: { message: string } } = await axios.patch(
        `/api/profile/publish/${_id}`
      );
      toast.success(data.message);
      router.push("/buy-residential");
    } catch (err: any) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="border-b-2 border-primary pb-2.5 mb-20">
      <h3 className="text-lg font-normal text-primary mb-5">{title}</h3>
      <p className="text-justify mb-5">{description}</p>
      <div className="flex mb-5">
        <span className="bg-secondary text-primary py-1 px-2.5 ml-4 rounded">
          {location}
        </span>
        <span className="bg-secondary text-primary py-1 px-2.5 ml-4 rounded">
          {sp(price)}
        </span>
      </div>
      <button
        onClick={publishHandler}
        className="bg-success py-1 px-4 rounded text-white cursor-pointer mt-5 transition duration-100 hover:text-black font-normal text-base"
      >
        انتشار
      </button>
      <Toaster />
    </div>
  );
};
