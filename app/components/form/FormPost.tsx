"use client";

import { ChangeEvent, useState } from "react";

import { createPost, updatePost } from "@/app/components/form/actions";
import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";
import { useRouter } from "next/navigation";
import { Form } from "@/app/lib/types";

import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import { revalidateAction } from "@/app/lib/features/revalidate";
import RichText from "@/app/components/RichText";

export function FormPost({
  id,
  type,
  title,
  excerpt,
  content,
  published,
}: Form) {
  const router = useRouter();
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false);
  let [formValues, setFormValues] = useState<Form>({
    id: id || JSON.stringify(new Date().valueOf()),
    title: title || "",
    excerpt: excerpt || "",
    content: content || "",
    published: published || selected,
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleContent = (html: string, name: string) => {
    setFormValues({ ...formValues, [name]: html });
  };
  const handlePublish = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
    setSelected(checked);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (type === "create") {
      try {
        createPost(formValues);
        revalidateAction("/");
        dispatch(setLoading(false));
        router.replace("/");
      } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
      }
    } else if (type === "update") {
      try {
        updatePost(formValues);
        revalidateAction("/");
        dispatch(setLoading(false));
        router.replace("/");
      } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
      }
    } else {
      alert("Error: FormPost Component");
      console.log("Error: FormPost Component");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-6 px-8">
      <div className="flex flex-col gap-4 md:w-3/4">
        <input
          className="text-2xl lg:text-4xl font-medium focus:outline-none"
          required
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          placeholder="Enter title"
          onChange={handleInput}
        />
        <RichText
          content={formValues.content}
          onChange={handleContent}
          name="content"
          id="content"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-1/4">
        <Textarea
          className="max-w-xs resize-y min-h-[40px]"
          id="excerpt"
          name="excerpt"
          value={formValues.excerpt}
          placeholder="Enter Excerpt"
          onChange={handleTextArea}
        />
        <Checkbox
          id="published"
          name="published"
          label="published"
          checked={published || selected}
          defaultChecked={published || selected}
          onChange={handlePublish}
        >
          Publish{" "}
        </Checkbox>
        <small className="text-gray-400">
          *If not checked, the post will be saved as a draft.
        </small>
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
