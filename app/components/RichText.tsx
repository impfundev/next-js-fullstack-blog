"use client";

import { useState } from "react";
import {
  EditorContent,
  useEditor,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Divider from "@mui/joy/Divider";

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
    ],
    content: content || "Start Writing your content here...",
    onUpdate({ editor }) {
      const html = editor.getHTML();
      handleContent(html);
    },
    editorProps: {
      attributes: {
        class:
          "prose md:prose-lg focus:outline-none md:min-w-[70vw] dark:prose-invert min-h-[70vh]",
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 px-10">
      <input
        className="hidden"
        type="text"
        id="content"
        name="content"
        defaultValue={isContent}
      />
      <Divider />
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Toolbar editor={editor} />
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Toolbar editor={editor} />
        </BubbleMenu>
      )}
      <EditorContent editor={editor} name={name} />
    </div>
  );
}
