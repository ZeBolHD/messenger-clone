"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup = ({ users = [] }: AvatarGroupProps) => {
  const slicedUsers = users.slice(0, 3);
  const positionMap = ["top-0 left-[12px]", "bottom-0", "bottom-0 right-0"];

  return (
    <div className="relative h-11 w-12">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[index]}`}
        >
          <Image fill alt="Avatar" src={user?.image || "/images/placeholder.jpg"} />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
