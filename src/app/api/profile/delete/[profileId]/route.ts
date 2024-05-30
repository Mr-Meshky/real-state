import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { ContextType, SessionType } from "@/utils/types";

export async function DELETE(req: NextRequest, context: ContextType) {
  try {
    await connectDB();

    const id = context.params.profileId;

    const session: SessionType = await getServerSession();
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    if (!user._id === profile.userId) {
      return NextResponse.json(
        {
          error: "دستری شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
