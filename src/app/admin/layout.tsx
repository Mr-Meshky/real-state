import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import User, { UserType } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { SessionType } from "@/utils/types";

export const metadata: Metadata = {
  title: "پنل ادمین خانه پیدا",
  icons: { icon: "./favicon.ico" },
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): Promise<ReactNode> {
  const session: SessionType = await getServerSession();
  if (!session) redirect("/signin");
  await connectDB();
  const user: UserType = (await User.findOne({
    email: session.user.email,
  })) as UserType;
  if (user.role !== "ADMIN") redirect("/dashboard");

  if (!user)
    return (
      <h3 className="text-danger text-2xl font-semibold text-center mt-5">
        مشکلی پیش آمده است
      </h3>
    );

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}
