import Link from "next/link";
import { getServerSession } from "next-auth";

import UserComponent from "@/app/components/User";
import { authOptions } from "@/app/lib/auth";

export default async function Sidebar() {
  const session = await getServerSession(authOptions);
  const menus = [
    { text: "Dashboard", link: "/dashboard" },
    { text: "Posts", link: "/dashboard/posts" },
  ];
  return (
    <div className="flex flex-col justify-between w-full h-screen max-w-[25vw] border-small border-default-200">
      <div className="flex flex-col gap-10 py-10">
        <h1 className="text-xl font-bold px-10">Fullstack Blog</h1>
        <div className="items-center">
          {menus.map((menu) => {
            return (
              <Link
                className="hover:bg-gray-200 flex items-center px-10 py-1"
                href={menu.link}
              >
                {menu.text}
              </Link>
            );
          })}
        </div>
      </div>

      {session && (
        <UserComponent
          name={session.user!.name!}
          email={session.user!.email!}
        />
      )}
    </div>
  );
}
