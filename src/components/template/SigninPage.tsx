"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, SignInResponse } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import Loader from "../module/Loader";

interface Inputs {
  email: string;
  password: string;
}

export const SigninPage = (): ReactNode => {
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  const router: AppRouterInstance = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const signinHandler = async ({ email, password }: Inputs): Promise<void> => {
    setLoading(true);
    const res: SignInResponse | undefined = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      toast.error(res?.error);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-primary font-semibold text-4xl mb-5">فرم ورود</h4>
      <form
        className="flex flex-col max-w-[700px] shadow-[#304ffe4a_0px_4px_15px] p-10 border-2 border-primary rounded-xl mb-8"
        onSubmit={handleSubmit(signinHandler)}
      >
        <label className="text-primary mb-2.5 font-normal">ایمیل:</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          className={`mb-10 w-[250px] border border-primary border-dashed text-gray-500 rounded p-2.5 text-xl h-10 focus:border-solid ltr ${
            errors.email
              ? "!border-danger focus:!outline-danger focus:border-solid"
              : ""
          }`}
        />
        <label className="text-primary mb-2.5 font-normal">رمز عبور:</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className={`mb-10 w-[250px] border border-primary border-dashed text-gray-500 rounded p-2.5 text-xl h-10 focus:border-solid ltr ${
            errors.password
              ? "!border-danger focus:!outline-danger focus:border-solid"
              : ""
          }`}
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="border-none bg-primary text-white font-normal text-xl transition duration-100 cursor-pointer py-2 hover:scale-105"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-gray-500 text-xl">
        حساب کاربری ندارید؟
        <Link
          href="/signup"
          className="text-primary mr-2.5 border-b-[3px] border-gray-500"
        >
          ثبت نام
        </Link>
      </p>
      <Toaster />
    </div>
  );
};
