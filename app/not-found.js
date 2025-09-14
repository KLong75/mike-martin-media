// import from next
import { connection } from "next/server";
import Image from "next/image";

export default async function NotFound() {
  await connection();

  return (
    <div className="p-8 text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="m-4">The page you are looking for does not exist.</p>
        <Image
          className=""
          src="/branding/mmm_black.png"
          width={294}
          height={95}
          alt="Mike Martin Media Logo"
          priority
        />
    </div>
  );
}
