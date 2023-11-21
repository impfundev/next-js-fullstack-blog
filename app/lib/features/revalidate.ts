"use server";

import { revalidatePath } from "next/cache";

export const revalidateAction = async (path: string) => {
  try {
    revalidatePath(path);
  } catch (error) {
    console.error("revalidateAction=> ", error);
  }
};
