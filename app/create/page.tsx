import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { FormPost } from "@/app/form/FormPost";

export default async function CreateNote() {
  const session = await getServerSession(authOptions);
  return (
    <>{session ? <FormPost type="create" /> : redirect("/api/auth/signin")}</>
  );
}
