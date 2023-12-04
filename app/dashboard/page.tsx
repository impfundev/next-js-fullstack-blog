import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import posts from "@/app/lib/posts";
import { redirect } from "next/navigation";

import Card from "@mui/joy/Card";

export default async function Dashboard() {
  const dataPosts = await posts();
  const session = await getServerSession(authOptions);
  const currentUser = session!.user!.name;
  return (
    <>
      {session ? (
        <div className="flex flex-col gap-10 p-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="w-full flex flex-col gap-6 items-center">
            <Card variant="soft">
              <h2 className="text-2xl font-bold">
                Total Post: {dataPosts.posts.length}
              </h2>
            </Card>
          </div>
        </div>
      ) : (
        redirect("/auth")
      )}
    </>
  );
}
