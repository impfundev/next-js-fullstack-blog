"use client";

import { ChangeEvent, useState } from "react";

import { createPost, updatePost } from "@/app/components/form/actions";
import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";
import { useRouter } from "next/navigation";
import { Form } from "@/app/lib/types";

import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
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
          classNames={{
            base: "max-w-xs",
            input: "resize-y min-h-[40px]",
          }}
          disableAnimation
          disableAutosize
          type="text"
          id="excerpt"
          name="excerpt"
          label="Excerpt"
          value={formValues.excerpt}
          placeholder="Enter Excerpt"
          onChange={handleInput}
        />
        <Checkbox
          type="checkbox"
          id="published"
          name="published"
          checked={published || selected}
          defaultSelected={published || selected}
          onChange={handlePublish}
        >
          Publish{" "}
        </Checkbox>
        <small className="text-gray-400">
          *If not checked, the post will be saved as a draft.
        </small>
        <Button className="bg-white border-2" isLoading={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
