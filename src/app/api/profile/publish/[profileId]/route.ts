import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { ContextType, SessionType } from "@/utils/types";

export async function PATCH(req: NextRequest, context: ContextType) {
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
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403,
        }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
