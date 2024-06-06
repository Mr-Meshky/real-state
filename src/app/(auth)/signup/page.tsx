import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { SignupPage } from "@/components/template/SignupPage";

export default async function Signup() {
  const session = await getServerSession();
  if (session) redirect("/");

  return <SignupPage />;
}
