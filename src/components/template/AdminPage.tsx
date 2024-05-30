import AdminCard from "@/components/module/AdminCard";
import { ProfileType } from "@/models/Profile";

function AdminPage({ profiles }: { profiles: ProfileType[] }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="text-danger py-2.5 px-4 rounded-xl bg-[rgba(219,5,5,0.159)] w-fit">
          هیچ آگهی در انتظار تاییدی وجود ندارد
        </p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
