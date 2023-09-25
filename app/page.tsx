"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.replace("/quiz");
    } else {
      router.replace("/auth/login");
    }
  }, [router, session]);

  return <div>Welcome to Quiz App</div>;
}
