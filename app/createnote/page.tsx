import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import Create from "../../components/Create.component";
import { Card } from "@nextui-org/card";

export default async function CreateNote() {
  const session = await getServerSession(authOptions);
  return (
    <Card className="light">
      {session ? <Create /> : redirect("/api/auth/signin")}
    </Card>
  );
}
