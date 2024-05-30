import Sidebar from "@/components/module/Sidebar";
import { CategoriesType } from "@/constants/strings";
import { ProfileType } from "@/models/Profile";

import { Card } from "../module/Card";

function BuyResidentialsPage({
  data,
  searchParams,
}: {
  data: ProfileType[];
  searchParams: { category?: CategoriesType } | undefined;
}) {
  return (
    <div className="flex justify-between mt-20 flex-col lg:flex-row">
      <div className="flex flex-col items-center h-fit px-2 py-4 rounded-xl ml-10 w-[220px] shadow-[#304ffe4a_0px_4px_15px]">
        <Sidebar searchParams={searchParams} />
      </div>
      <div className="w-full flex flex-wrap justify-center lg:justify-between">
        {data.length ? null : (
          <p className="bg-[rgba(219,5,5,0.159)] text-danger text-lg rounded-xl h-[50px] py-2.5 px-4">
            هیچ آگهی ثبت نشده است
          </p>
        )}
        {data.map((profile: ProfileType) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
