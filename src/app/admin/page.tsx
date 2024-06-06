import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { AdminPage } from "@/components/template/AdminPage";
import Profile from "@/models/Profile";
import User, { UserType } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { SessionType } from "@/utils/types";

export default async function Admin(): Promise<ReactNode> {
  await connectDB();
  const session: SessionType = await getServerSession();
  if (!session) redirect("/signin");
  const user: UserType = (await User.findOne({
    email: session.user.email,
  })) as UserType;
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return <AdminPage profiles={profiles} />;
}
