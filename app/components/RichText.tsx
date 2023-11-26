"use client";

import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import Toolbar from "@/app/components/Toolbar";
import { RichText } from "@/app/lib/types";

export default function RichText({ name, content, onChange }: RichText) {
  const [isContent, setContent] = useState("");
  const handleContent = (html: string) => {
    setContent(html);
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Placeholder.configure({
        placeholder: "Write your content …",
      }),
    ],
    content: content,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      handleContent(html);
    },
    editorProps: {
      attributes: {
        class: "prose focus:outline-none md:min-w-[70vw]",
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <input
        className="hidden"
        type="text"
        id="content"
        name="content"
        defaultValue={isContent}
      />
      <Toolbar editor={editor} />
      <EditorContent editor={editor} name={name} />
    </div>
  );
}
