import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import Markdown from "react-markdown";
import IconUser from "@/app/components/icon/User.icon";
import DeletePost from "@/app/components/DeletePost";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Form } from "@/app/lib/types";

export default async function App({ author, title, excerpt, id }: Form) {
  const session = await getServerSession(authOptions);
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <IconUser width="1rem" height="1rem" />
        <div className="flex flex-col">
          <p className="text-sm">{author}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <h2 className="text-2xl font-bold tracking-wide py-4">{title}</h2>
        <Markdown>{excerpt}</Markdown>
      </CardBody>
      {session && (
        <CardFooter className="gap-2">
          <Link className="w-full" href={`/edit/${id}`}>
            <Button className="w-full" color="primary">
              Edit
            </Button>
          </Link>
          <DeletePost id={id} />
        </CardFooter>
      )}
    </Card>
  );
}
