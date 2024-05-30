import AddProfilePage from "@/components/template/AddProfilePage";
import Profile, { ProfileType } from "@/models/Profile";
import connectDB from "@/utils/connectDB";

type EditProps = {
  params: { profileId: string };
};

async function Edit({ params: { profileId } }: EditProps) {
  await connectDB();
  let profile: ProfileType;
  try {
    profile = (await Profile.findOne({
      _id: profileId,
    })) as ProfileType;
  } catch (error) {
    return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;
  }

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edit;
