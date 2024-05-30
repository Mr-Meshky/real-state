import { UsersPage } from "@/components/template/UsersPage";
import User from "@/models/User";

export default async function Users() {
  const users = await User.find().sort("-createdAt");

  return <UsersPage users={users} />;
}
