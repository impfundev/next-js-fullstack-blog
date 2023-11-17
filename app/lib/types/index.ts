import { Editor } from "@tiptap/react";
import { DropzoneInputProps } from "react-dropzone";

export type Form = {
  id?: string;
  slug?: string;
  type?: "create" | "update";
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
  id?: string;
  name?: string;
  content?: string;
  formData?: FormData;
  onChange?: (html: string, name: string) => void;
};

export type HandleUpload = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  inputProps?: DropzoneInputProps | undefined;
};

export interface User {
  name?: string;
  email?: string;
}

export interface ModalType {
  buttonText: string;
}
