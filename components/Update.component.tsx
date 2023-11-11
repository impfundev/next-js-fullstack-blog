"use client";

import RichText from "./RichText.component";
import React, { useState, ChangeEvent } from "react";
import { CardBody, Input, Button, Checkbox } from "@nextui-org/react";
import { Form } from "../lib/types";

export default function Update({
  title,
  excerpt,
  content,
  published,
  id,
}: Form) {
  let [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(published);
  let [formValues, setFormValues] = useState<Form>({
    id: id,
    title: "" || title,
    excerpt: "" || excerpt,
    content: "" || content,
    published: selected || published,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleContent = (html: string, name: string | any) => {
    setFormValues({ ...formValues, [name]: html });
  };
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log(formValues);

    try {
      const res = await fetch("/api/update", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
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
          value={formValues.title || title}
          onChange={handleChange}
          placeholder="Enter title"
        />
        <Input
          type="text"
          name="excerpt"
          label="Excerpt"
          value={formValues.excerpt || excerpt}
          onChange={handleChange}
          placeholder="Enter Excerpt"
        />
        <RichText
          content={formValues.content || content}
          name="content"
          onChange={handleContent}
        />
        <label>
          <Checkbox
            type="checkbox"
            defaultSelected={published}
            checked={published}
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
