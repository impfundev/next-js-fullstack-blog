import { Form } from "@/lib/types";

export async function createPost(data: Form) {
  const res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  if (!res.ok) {
    return;
  }
}

export async function updatePost(data: Form) {
  const res = await fetch("/api/update", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  if (!res.ok) {
    return;
  }
}
