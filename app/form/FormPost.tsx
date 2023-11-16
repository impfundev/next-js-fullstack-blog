"use client";

import { ChangeEvent, useState } from "react";

import { createPost, updatePost } from "@/app/form/actions";
import { useAppSelector, useAppDispatch } from "@/app/redux/hook";
import { setLoading } from "@/app/features/loadingSlice";
import { useRouter } from "next/navigation";
import { Form } from "@/lib/types";

import { Input } from "@nextui-org/input";
import RichText from "@/components/RichText.component";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

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
    title: "" || title,
    excerpt: "" || excerpt,
    content: "" || content,
    published: false || published,
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleContent = (html: string, name: string) => {
    setFormValues({ ...formValues, [name]: html });
  };
  const handlePublish = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      published: checked,
    }));
    setSelected(checked);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (type === "create") {
      try {
        createPost(formValues);
        dispatch(setLoading(false));
        router.replace("/");
      } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
      }
    } else if (type === "update") {
      try {
        updatePost(formValues);
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
        <Input
          required
          type="text"
          id="title"
          name="title"
          label="Title"
          value={formValues.title || title}
          placeholder="Enter title"
          onChange={handleInput}
        />
        <Input
          type="text"
          id="excerpt"
          name="excerpt"
          label="Excerpt"
          value={formValues.excerpt || excerpt}
          placeholder="Enter Excerpt"
          onChange={handleInput}
        />
        <RichText
          content={formValues.content || content}
          onChange={handleContent}
          name="content"
          id="content"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-1/4">
        <Checkbox
          type="checkbox"
          id="published"
          name="published"
          checked={selected || published}
          defaultSelected={selected || published}
          onChange={handlePublish}
        >
          Publish{" "}
        </Checkbox>
        <small className="text-gray-400">
          *If not checked, the post will be saved as a draft.
        </small>
        <Button isLoading={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
