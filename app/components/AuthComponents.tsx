"use client";

import Button from "@mui/joy/Button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import IconLogout from "@/app/components/icon/LogOut.icon";
import IconLogin from "@/app/components/icon/LogIn.icon";

import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";

export const LoginButton = () => {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  return (
    <Button
      loading={loading}
      size="sm"
      onClick={() => {
        dispatch(setLoading(true));
        signIn();
        dispatch(setLoading(false));
      }}
    >
      <IconLogin className="mr-2" width="1rem" height="1rem" />
      Sign In
    </Button>
  );
};

export const LogoutButton = () => {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  return (
    <Button
      loading={loading}
      size="sm"
      onClick={() => {
        dispatch(setLoading(true));
        signOut();
        dispatch(setLoading(false));
      }}
    >
      <IconLogout className="mr-2" width="1rem" height="1rem" />
      Log Out
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
