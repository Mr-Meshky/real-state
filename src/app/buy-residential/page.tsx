import { ReactNode } from "react";

import { BuyResidentialsPage } from "@/components/template/BuyResidentialsPage";
import { CategoriesType } from "@/constants/strings";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export default async function BuyResidentials({
  searchParams,
}: {
  searchParams: { category?: CategoriesType } | undefined;
}): Promise<ReactNode> {
  let data;
  try {
    await connectDB();
    data = await Profile.find({ published: true }).select("-userId");
  } catch (err) {
    return <h3>مشکلی در سرور رخ داده است</h3>;
  }

  if (searchParams?.category) {
    data = data.filter((i): boolean => i.category === searchParams.category);
  }
  return <BuyResidentialsPage data={data} searchParams={searchParams} />;
}
