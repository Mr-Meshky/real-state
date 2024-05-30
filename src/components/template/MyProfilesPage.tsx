import DashboardCard from "@/components/module/DashboardCard";
import { ProfileType } from "@/models/Profile";

export interface MyProfilesPageProps {
  profiles: ProfileType[];
}

function MyProfilesPage({ profiles }: MyProfilesPageProps) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="text-danger py-2.5 px-4 rounded-xl bg-[rgba(219,5,5,0.159)] w-fit">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
