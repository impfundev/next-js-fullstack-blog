"use client";

import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";
import { revalidateAction } from "@/app/lib/features/revalidate";

import { Button } from "@nextui-org/button";
import { Form } from "@/app/lib/types";

export default function DeletePost({ id }: Form) {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  let postId = {
    id: id,
  };
  const handleDelete = async () => {
    dispatch(setLoading(true));
    try {
      const res = await fetch("/api/delete", {
        method: "DELETE",
        body: JSON.stringify(postId),
        headers: {
          "Content-Type": "application/json",
        },
      });
      revalidateAction("/");
      dispatch(setLoading(false));
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }
    } catch (error: any) {
      dispatch(setLoading(false));
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
