import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { LoginButton, RegisterButton } from "@/app/components/AuthComponents";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import Link from "next/link";
import IconAdd from "@/app/components/icon/Add.icon";
import UserComponent from "@/app/components/User";

export default async function App() {
  const session = await getServerSession(authOptions);
  return (
    <Navbar isBordered position="static">
      <NavbarBrand
        as={Link}
        href={"/"}
        className="text-xl font-bold tracking-wide"
      >
        Fullstack Blog
      </NavbarBrand>
      {session ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Link href="/dashboard/create">
              <Button size="sm" className="bg-white border">
                <IconAdd width="1rem" height="1rem" />
                New Post
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <UserComponent
              name={session.user!.name!}
              email={session.user!.email!}
            />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <LoginButton />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <RegisterButton />
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
