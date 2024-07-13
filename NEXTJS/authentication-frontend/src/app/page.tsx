"use client"

import Spinner from "@/componentss/Spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const loggesUser = JSON.parse(localStorage.getItem('userInfo') as string);
    !loggesUser ? router.push('/login') : router.push('/dashboard')
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
}
