"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "../components/ui/buttons";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="text-right border-[1px] border-gray-300 p-2 grid grid-cols-[1fr_auto] items-center justify-between">
      <div className="text-left text-xl font-bold">Quiz App</div>
      <div className="w-[300px] grid grid-cols-[1fr_auto] items-center justify-center">
        <div className="px-2">{session?.user?.name}</div>
        <Button btnType="info" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </div>
  );
}

export default Header;
