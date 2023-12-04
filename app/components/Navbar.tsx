import Button from "@mui/joy/Button";
import { LoginButton } from "@/app/components/AuthComponents";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import Link from "next/link";
import IconAdd from "@/app/components/icon/Add.icon";
import UserComponent from "@/app/components/User";

export default async function App() {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-8 py-2 flex flex-col justify-between">
      <Link href={"/"} className="text-xl font-bold tracking-wide">
        Fullstack Blog
      </Link>
      {session ? (
        <div className="flex gap-6">
          <div className="hidden md:flex">
            <Link href="/dashboard/create">
              <Button size="sm" className="bg-white border">
                <IconAdd width="1rem" height="1rem" />
                New Post
              </Button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <UserComponent
              name={session.user!.name!}
              email={session.user!.email!}
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-6">
          <div className="hidden lg:flex">
            <LoginButton />
          </div>
        </div>
      )}
    </div>
  );
}
