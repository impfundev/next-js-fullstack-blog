"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Form } from "../lib/types";

export default function DeletePost({ id }: Form) {
  let [loading, setLoading] = useState(false);
  let postId = {
    id: id,
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/delete", {
        method: "DELETE",
        body: JSON.stringify(postId),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      window.location.reload();
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
    <Button
      onClick={handleDelete}
      isLoading={loading}
      className="w-full"
      color="danger"
    >
      Delete
    </Button>
  );
}
