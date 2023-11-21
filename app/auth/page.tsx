import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import FormAuth from "@/app/components/form/FormAuth";

export default async function AuthPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-[30vw] flex flex-col gap-8 text-center">
      <h1 className="text-4xl font-medium">Let's get started!</h1>
      {session ? redirect("/dashboard") : <FormAuth />}
    </div>
  );
}
