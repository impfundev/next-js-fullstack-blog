// import fs from "fs";

export async function POST(req: Request) {
  try {
    const { image } = (await req.json()) as {
      image: any;
    };
    console.log(image);
    return;
  } catch (error: any) {
    console.error("Can't read the image!!");
    return;
  }
}
