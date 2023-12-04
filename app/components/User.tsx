"use client";

import Avatar from "@mui/joy/Avatar";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";

import { LogoutButton } from "@/app/components/AuthComponents";
import { User } from "@/app/lib/types";

export default function UserComponent({ name, email }: User) {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-2">
        <Avatar />
        <Dropdown>
          <MenuButton className="rounded-full" size="sm">
            {name}
          </MenuButton>
          <Menu>
            <MenuItem>{name}</MenuItem>
            <MenuItem>{email}</MenuItem>
          </Menu>
        </Dropdown>
      </div>
      <LogoutButton />
    </div>
  );
}
