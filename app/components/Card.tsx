import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";

import IconUser from "@/app/components/icon/User.icon";
import DeletePost from "@/app/components/DeletePost";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Form } from "@/app/lib/types";

export default async function CardPost({
  author,
  title,
  excerpt,
  id,
  published,
}: Form) {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full">
      <Card>
        <CardContent>
          <div className="flex gap-2 items-center">
            <IconUser width="1rem" height="1rem" />
            <p className="text-sm">{author}</p>
          </div>
        </CardContent>
        <CardContent>
          <h2 className="text-2xl font-bold tracking-wide py-4">{title}</h2>
          <p>{excerpt}</p>
        </CardContent>
        {session && (
          <CardContent orientation="horizontal" className="gap-2">
            <Link className="w-full" href={`/dashboard/edit/${id}`}>
              <Button className="w-full" color="primary">
                Edit
              </Button>
            </Link>
            <DeletePost id={id} />
          </CardContent>
        )}
      </Card>
    </div>
  );
}
