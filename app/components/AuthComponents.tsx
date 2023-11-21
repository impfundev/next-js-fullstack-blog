"use client";

import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import ModalRegister from "@/app/components/Register";
import IconLogout from "@/app/components/icon/LogOut.icon";
import IconLogin from "@/app/components/icon/LogIn.icon";

import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";

export const LoginButton = () => {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  return (
    <Button
      isLoading={loading}
      className="bg-white border"
      onClick={() => {
        dispatch(setLoading(true));
        signIn();
        dispatch(setLoading(false));
      }}
    >
      <IconLogin width="1rem" height="1rem" />
      Sign In
    </Button>
  );
};

export const RegisterButton = () => {
  return <ModalRegister buttonText="Sign Up" />;
};

export const LogoutButton = () => {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  return (
    <Button
      className="bg-white border"
      onClick={() => {
        dispatch(setLoading(true));
        signOut();
        dispatch(setLoading(false));
      }}
    >
      <IconLogout width="1rem" height="1rem" />
      Sign Out
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
