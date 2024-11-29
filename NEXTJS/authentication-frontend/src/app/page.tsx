"use client"

import { SignupForm, Spinner } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('userInfo') as string);
    !loggedUser ? router.push('/login') : router.push('/dashboard')
  }, [router])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
}
