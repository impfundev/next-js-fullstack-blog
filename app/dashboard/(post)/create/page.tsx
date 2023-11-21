import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import { FormPost } from "@/app/components/form/FormPost";

export default async function CreateNote() {
  const session = await getServerSession(authOptions);
  return (
    <>{session ? <FormPost type="create" /> : redirect("/api/auth/signin")}</>
  );
}
