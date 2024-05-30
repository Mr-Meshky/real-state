import { getServerSession } from "next-auth";

import DashboardPage from "@/components/template/DashboardPage";
import User, { UserType } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { SessionType } from "@/utils/types";

async function Dashboard() {
  await connectDB();
  const session: SessionType = await getServerSession();
  const user: UserType = (await User.findOne({
    email: session?.user.email,
  })) as UserType;
  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
