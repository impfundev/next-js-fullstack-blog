"use client";

import RichText from "./RichText.component";
import React, { useState, ChangeEvent } from "react";
import { CardBody, Input, Button, Checkbox } from "@nextui-org/react";
import { Form } from "../lib/types";
import UploadImage from "./UploadImage.component";

export default function App() {
  let [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  let [formValues, setFormValues] = useState<Form>({
    id: JSON.stringify(new Date().valueOf()),
    title: "",
    excerpt: "",
    content: "",
    published: selected,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleContent = (html: string, name: string | any) => {
    setFormValues({ ...formValues, [name]: html });
  };
  const handleUpload = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);

    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(target.files[0]);
  };
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (typeof file === "undefined") return;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "upload_cloudinary");
      formData.append(
        "api_key",
        JSON.stringify(process.env.CLOUDINARY_API_KEY)
      );
      const results = await fetch(
        "https://api.cloudinary.com/v1_1/dlf8ittab/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      setLoading(false);
      if (!res.ok || !results.ok) {
        alert((await res.json()).message);
        alert((await results.json()).message);
        return;
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <CardBody>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          required
          type="text"
          name="title"
          label="Title"
          value={formValues.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
        <Input
          type="text"
          name="excerpt"
          label="Excerpt"
          value={formValues.excerpt}
          onChange={handleChange}
          placeholder="Enter Excerpt"
        />
        <UploadImage onChange={handleUpload} />
        {preview && (
          <div className="flex justify-center">
            <img
              className="object-contain max-h-80 w-full"
              src={preview as string}
              alt="Upload preview"
            />
          </div>
        )}
        <RichText name="content" onChange={handleContent} />
        <label>
          <Checkbox
            type="checkbox"
            checked={selected}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              setFormValues((prevFormValues) => ({
                ...prevFormValues,
                published: checked,
              }));
              setSelected(checked);
            }}
          />
          Publish | status: {selected ? "Publish" : "Draft"}
        </label>
        <Button isLoading={loading} type="submit">
          Submit
        </Button>
      </form>
    </CardBody>
  );
}
