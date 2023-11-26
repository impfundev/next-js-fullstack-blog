"use server";

// import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    title: z.string().min(1),
    excerpt: z.string().min(1),
    content: z.string().min(1),
    published: z.boolean(),
  });

  const parse = schema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    published: formData.get("published") === "published",
  });

  if (!parse.success) {
    console.error(parse.error);
    return { message: "Failed to create post" };
  }

  const data = parse.data;

  try {
    console.log(data);
    return { message: `Added post with title ${data.title}` };
  } catch (e) {
    console.error(`Error: ${e}`);
    return { message: "Failed to create post" };
  }
}
