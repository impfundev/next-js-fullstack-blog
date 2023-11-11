import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import {
  LoginButton,
  LogoutButton,
  RegisterButton,
} from "./ButtonAuth.component";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import Link from "next/link";
import IconAdd from "./icon/Add.icon";
import UserComponent from "./User.component";

export default async function App() {
  const session = await getServerSession(authOptions);
  return (
    <Navbar shouldHideOnScroll className="border border-b">
      <NavbarBrand className="flex flex-col gap-1 items-start">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Fullstack Blog
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ilhammp/"
          className="text-sm"
        >
          By Ilham Maulana Pratama
        </Link>
      </NavbarBrand>
      {session ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="/createnote">
              <Tooltip content="Add New Post">
                <Button color="primary" variant="shadow">
                  <IconAdd width="1rem" height="1rem" />
                  New Post
                </Button>
              </Tooltip>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <LogoutButton />
          </NavbarItem>
          <NavbarItem>
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
