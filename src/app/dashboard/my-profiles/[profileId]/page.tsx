import AddProfilePage from "@/components/template/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

type EditProps = {
  params: { profileId: string };
};

async function Edit({ params: { profileId } }: EditProps) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edit;
