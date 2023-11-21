"use client";

import {
  Bold,
  Italic,
  Strike,
  UnorderedList,
  OrderedList,
} from "@/app/components/icon/Toolbar.icon";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Toolbar } from "@/app/lib/types";

export default function Toolbar({ editor }: Toolbar) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 m-5 light">
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
      <Popover placement="top">
        <PopoverTrigger>
          <Button size="sm" className="font-bold">
            Heading
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex-row gap-2 p-2">
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H1
          </Button>
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H2
          </Button>
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H3
          </Button>
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H4
          </Button>
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H5
          </Button>
          <Button
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            data-active={editor.isActive("strike") ? "is-active" : undefined}
            aria-label="heading1"
            className="font-bold"
          >
            H6
          </Button>
        </PopoverContent>
      </Popover>
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
    </div>
  );
}
