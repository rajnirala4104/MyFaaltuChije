import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: {
      absolute: "Brand | Home"
   }
}

export default function Home() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span>
          Welcome Home
        </span>
        <button className="py-2 px-4 bg-white my-2 rounded-lg text-black">
          <Link href={'/users'}>
            Users
          </Link>
        </button>
      </div>
    </section>
  );
}
