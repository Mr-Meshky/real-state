import { UserType } from "@/models/User";

import { CardUser } from "../module/CardUser";

export const UsersPage = ({ users }: { users: UserType[] }) => {
  return (
    <div className="flex flex-wrap gap-5" dir="ltr">
      {users.map((user) => (
        <CardUser key={user._id} user={user} />
      ))}
    </div>
  );
};
