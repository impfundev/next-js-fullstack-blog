"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import ModalRegister from "./Register.component";
import IconLogout from "./icon/LogOut.icon";
import IconLogin from "./icon/LogIn.icon";

export const LoginButton = () => {
  return (
    <Button color="primary" variant="shadow" onClick={() => signIn()}>
      <IconLogin width="1rem" height="1rem" />
      Sign In
    </Button>
  );
};

export const RegisterButton = () => {
  return <ModalRegister buttonText="Sign Up" />;
};

export const LogoutButton = () => {
  return (
    <Tooltip content="Sign Out">
      <Button color="primary" variant="shadow" onClick={() => signOut()}>
        <IconLogout width="1rem" height="1rem" />
        Sign Out
      </Button>
    </Tooltip>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
