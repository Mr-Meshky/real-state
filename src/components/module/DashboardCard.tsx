"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { Card } from "@/components/module/Card";

import { DashboardCardProps } from "./type";

export const DashboardCard = ({ data }: DashboardCardProps) => {
  const router = useRouter();

  const editHandler = (): void => {
    router.refresh();
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async (): Promise<void> => {
    try {
      const result: { data: { error?: string; message: string } } =
        await axios.delete(`/api/profile/delete/${data._id}`);
      toast.success(result.data.message);
      router.refresh();
    } catch (err: any) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="flex border-2 border-secondary rounded-xl mb-5">
      <Card data={data} />
      <div className="flex items-end justify-between p-2.5 w-full">
        <button
          onClick={editHandler}
          className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-success text-success"
        >
          ویرایش
          <FiEdit className="text-lg mr-2.5" />
        </button>
        <button
          onClick={deleteHandler}
          className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-danger text-danger"
        >
          <span>حذف آگهی</span>
          <AiOutlineDelete className="text-lg mr-2.5" />
        </button>
      </div>
      <Toaster />
    </div>
  );
};
