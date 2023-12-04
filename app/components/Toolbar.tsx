"use client";

import {
  Bold,
  Italic,
  Strike,
  UnorderedList,
  OrderedList,
} from "@/app/components/icon/Toolbar.icon";

import Button from "@mui/joy/Button";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";

import { Toolbar } from "@/app/lib/types";

export default function Toolbar({ editor }: Toolbar) {
  if (!editor) {
    return null;
  }

  return (
    <ToggleButtonGroup
      className="flex flex-wrap gap-4 m-5 bg-white dark:bg-black shadow-sm shadow-blue-400"
      color="primary"
    >
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="bold"
      >
        <Bold />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="italic"
      >
        <Italic />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <Strike />
      </Button>
      <Dropdown>
        <MenuButton color="primary">Heading</MenuButton>
        <Menu className="flex-row gap-2 p-2">
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H1
          </MenuItem>
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H2
          </MenuItem>
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H3
          </MenuItem>
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H4
          </MenuItem>
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H5
          </MenuItem>
          <MenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H6
          </MenuItem>
        </Menu>
      </Dropdown>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <UnorderedList />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <OrderedList />
      </Button>
    </ToggleButtonGroup>
  );
}
