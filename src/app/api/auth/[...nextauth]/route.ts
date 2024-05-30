import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User, { UserType } from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      // @ts-ignore: Unreachable code error
      authorize: async function (credentials: {
        email: string;
        password: string;
      }): Promise<{ email: string }> {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کنید");

        const user: UserType = (await User.findOne({ email })) as UserType;

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid: boolean = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
