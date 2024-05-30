import { UserType } from "@/models/User";
import { calculateTimeDifference } from "@/utils/calculateTimeDifference";

export const CardUser = ({ user }: { user: UserType }) => {
  return (
    <div
      className={`py-3 px-2 border-2 border-secondary shadow-md shadow-primary bg-white rounded flex flex-col items-start gap-4 justify-center flex-1 min-w-[300px] max-w-[350px] ${
        user.role === "ADMIN" ? "text-green-500" : "text-yellow-500"
      }`}
    >
      <div>
        <span title={`Password: ${user.password}`} className="flex gap-2">
          <p>Email:</p>
          <p>{user.email}</p>
        </span>

        <span className="flex gap-2">
          <p>Role:</p>
          <p>{user.role}</p>
        </span>
      </div>

      <span className="flex gap-2 !text-gray-500">
        <p>createdAt:</p>
        <p>{calculateTimeDifference(user.createdAt)}</p>
      </span>
    </div>
  );
};
