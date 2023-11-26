"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/test/actions";
import RichText from "@/app/components/RichText";

import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      Publish
    </Button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState.message);
  const [selected, setSelected] = useState(false);

  return (
    <form
      action={formAction}
      className="flex flex-col md:flex-row justify-between gap-6 px-8"
    >
      <div className="flex flex-col gap-4 min-w-[74vw] h-full overflow-y-auto border-r-1">
        <input
          className="text-2xl lg:text-4xl font-medium focus:outline-none"
          required
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
        />
        <RichText />
      </div>
      <div className="flex flex-col gap-4 w-full">
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
          placeholder="Enter Excerpt"
        />
        <Checkbox
          type="checkbox"
          id="published"
          name="published"
          value="published"
          isSelected={selected}
          onValueChange={setSelected}
        >
          Publish{" "}
        </Checkbox>
        <small className="text-gray-400">
          {selected
            ? "Post ready to publish"
            : "Publish is unchecked, Post will send to draft"}
        </small>
        <SubmitButton />
      </div>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
