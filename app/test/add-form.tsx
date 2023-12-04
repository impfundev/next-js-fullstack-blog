"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/test/actions";
import RichText from "@/app/components/RichText";
import Uploader from "@/app/components/upload/uploader";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Link from "next/link";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/joy/Checkbox";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Publish
    </Button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState.message);
  const [selected, setSelected] = useState(false);
  const [sideMenu, openSideMenu] = useState(true);
  const [addImage, setAddImage] = useState(false);

  const handleImage = () => {
    setAddImage(!addImage);
  };

  return (
    <>
      <div className="h-[10vh] px-8 py-6 flex justify-between items-center border-b border-inherit">
        <Button
          size="sm"
          component={Link}
          href="/dashboard"
          startDecorator={<ArrowBackIcon />}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            openSideMenu(!sideMenu);
          }}
          size="sm"
        >
          <MenuOpenIcon />
        </Button>
      </div>
      <form
        action={formAction}
        className="h-[90vh] flex flex-col md:flex-row justify-between"
      >
        <div className="flex flex-col gap-4 min-w-[76vw] w-full h-full overflow-y-auto">
          <div className="px-10 pt-10">
            {addImage ? (
              <div className="flex flex-col gap-4">
                <div>
                  <Button size="sm" onClick={handleImage}>
                    - Remove Image
                  </Button>
                </div>
                <Uploader />
              </div>
            ) : (
              <Button size="sm" onClick={handleImage}>
                + Add Featured Image
              </Button>
            )}
          </div>
          <input
            className="text-2xl lg:text-4xl font-medium focus:outline-none bg-inherit px-10 pt-4"
            required
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
          />
          <RichText />
        </div>
        {sideMenu && (
          <div className="w-full flex flex-col gap-4 px-6 pt-10 border-l">
            <Textarea
              id="excerpt"
              name="excerpt"
              placeholder="Type Excerpt..."
              minRows={2}
            />
            <Checkbox
              id="published"
              name="published"
              label="published"
              value="published"
              checked={selected}
              defaultChecked={selected}
              onChange={() => setSelected(!selected)}
            >
              Publish
            </Checkbox>
            <small className="text-gray-400">
              {selected
                ? "Post ready to publish"
                : "Publish is unchecked, Post will send to draft"}
            </small>
            <SubmitButton />
          </div>
        )}
      </form>
    </>
  );
}
