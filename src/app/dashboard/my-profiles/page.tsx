import { getServerSession } from "next-auth";

import { MyProfilesPage } from "@/components/template/MyProfilesPage";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { SessionType } from "@/utils/types";

export default async function Myprofiles() {
  await connectDB();
  const session: SessionType = await getServerSession();

  const [user] = await User.aggregate([
    { $match: { email: session?.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilesPage profiles={user.profiles} />;
}
