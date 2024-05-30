import { Metadata } from "next";
import { ReactNode } from "react";

import DetailsPage from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export interface ProfileDetailsProps {
  params: { profileId: string };
}

async function ProfileDetails({
  params: { profileId },
}: ProfileDetailsProps): Promise<ReactNode> {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile)
    return (
      <h3 className="text-danger text-2xl font-semibold text-center mt-5">
        مشکلی پیش آمده است و یا آگهی حذف شده‌ است
      </h3>
    );

  return <DetailsPage data={profile} />;
}

export default ProfileDetails;

export const generateMetadata = async ({
  params: { profileId },
}: ProfileDetailsProps): Promise<Metadata> => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (profile) {
    return {
      title: profile.title,
      description: profile.description,
      authors: { name: profile.realState },
    } as Metadata;
  } else {
    return {
      title: "خانه پیدا",
    } as Metadata;
  }
};
