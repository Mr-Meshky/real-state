import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import SignupPage from "@/components/template/SignupPage";

async function Signup() {
  const session = await getServerSession();
  if (session) redirect("/");

  return <SignupPage />;
}

export default Signup;
