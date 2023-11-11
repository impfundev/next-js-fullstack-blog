import { EditorContent, useEditor } from "@tiptap/react";
import Toolbar from "./Toolbar.component";
import StarterKit from "@tiptap/starter-kit";
import { RichText } from "../lib/types";

export default function RichText({ name, content, onChange }: RichText) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange!(html, name!);
    },
    editorProps: {
      attributes: {
        class: "prose lg:prose-xl dark:prose-invert m-5 focus:outline-none",
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 bg-foreground-100 rounded-2xl">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} name={name} />
    </div>
  );
}
