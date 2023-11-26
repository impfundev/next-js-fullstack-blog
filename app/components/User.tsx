import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";

import IconUser from "@/app/components/icon/User.icon";
import { LogoutButton } from "@/app/components/AuthComponents";
import { User } from "@/app/lib/types";

export default function UserComponent({ name, email }: User) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button size="sm" className="bg-white border">
          <IconUser width={16} height={16} />
          {name}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4 px-1 py-2">
          <div>
            <span className="text-small font-bold">{name}</span>
            <br />
            <span className="text-tiny">{email}</span>
          </div>
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
