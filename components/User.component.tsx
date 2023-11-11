import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import IconUser from "./icon/User.icon";
import { User } from "../lib/types";

export default function UserComponent({ name, email }: User) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button color="primary">
          <IconUser width={16} height={16} />
          {name}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{name}</div>
          <div className="text-tiny">{email}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
