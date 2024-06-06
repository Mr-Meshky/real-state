import { Metadata } from "next";
import { ReactNode } from "react";

import { DetailsPage } from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export interface ProfileDetailsProps {
  params: { profileId: string };
}

export default async function ProfileDetails({
  params: { profileId },
}: ProfileDetailsProps): Promise<ReactNode> {
  await connectDB();
  let profile;
  try {
    profile = await Profile.findOne({ _id: profileId });
  } catch (error) {
    return (
      <h3 className="text-danger text-2xl font-semibold text-center mt-5">
        مشکلی پیش آمده است و یا آگهی حذف شده‌ است
      </h3>
    );
  }

  return <DetailsPage data={profile} />;
}

export const generateMetadata = async ({
  params: { profileId },
}: ProfileDetailsProps): Promise<Metadata> => {
  await connectDB();
  let profile;
  try {
    profile = await Profile.findOne({ _id: profileId });
  } catch (error) {
    return {
      title: "خانه پیدا",
    } as Metadata;
  }

  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
  } as Metadata;
};
