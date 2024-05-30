"use client";

import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import CustomDatePicker from "@/components/module/CustomDatePicker";
import Loader from "@/components/module/Loader";
import RadioList from "@/components/module/RadioList";
import TextInput from "@/components/module/TextInput";
import TextList from "@/components/module/TextList";

export interface AddProfilePageProps {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: [];
  amenities: [];
}

function AddProfilePage({ data }: { data?: AddProfilePageProps }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  useEffect(() => {
    if (data) setProfileData(data);
  }, [data]);

  const router: AppRouterInstance = useRouter();

  const submitHandler = async (): Promise<void> => {
    setLoading(true);
    const { data }: { data: { error?: string; message: string } } =
      await axios.post("/api/profile", profileData);
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      router.push("/dashboard/my-profiles");
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const { data }: { data: { error?: string; message: string } } =
      await axios.patch("/api/profile", profileData);
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      router.push("/dashboard/my-profiles");
    }
  };

  return (
    <div className="flex flex-col mb-[150px]">
      <h3 className="text-2xl font-normal mb-20 w-full text-primary py-2.5 px-4">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          className="bg-primary text-white rounded text-base transition duration-100 p-2.5 hover:scale-105"
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          className="bg-primary text-white rounded text-base transition duration-100 p-2.5 hover:scale-105"
          onClick={submitHandler}
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
