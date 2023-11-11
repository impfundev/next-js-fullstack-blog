import { Editor } from "@tiptap/react";

export type Form = {
  id?: string;
  slug?: string;
  title?: string;
  image?: string;
  author?: string;
  excerpt?: string;
  content?: string;
  published?: boolean;
  authorId?: string | null | undefined;
};

export type Toolbar = {
  editor?: Editor | null | undefined;
};

export type RichText = {
  name?: string;
  content?: string;
  onChange?: (html: string, name: string) => void;
};

export type HandleUpload = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export interface User {
  name?: string;
  email?: string;
}

export interface ModalType {
  buttonText: string;
}
