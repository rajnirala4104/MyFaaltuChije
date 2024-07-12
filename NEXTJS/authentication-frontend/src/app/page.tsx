"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const loggesUser = JSON.parse(localStorage.getItem('userInfo') as string);
    if (!loggesUser) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href="/dashboard">
        <span className="text-3xl bg-gray-300 p-3 rounded-lg hover:bg-gray-200">Go to dashboard</span>
      </Link>
    </div>
  );
}
