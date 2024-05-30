import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { SigninPage } from "@/components/template/SigninPage";

async function Signin(): Promise<ReactNode> {
  const session = await getServerSession();
  if (session) redirect("/");

  return <SigninPage />;
}

export default Signin;
