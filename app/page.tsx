import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-[2100px] flex-col items-center justify-between py-32 px-16 bg-linear-to-b from-emerald-600 to-amber-300">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black">
            The tool to make a list of your favourite albums of the year.
          </h1>
          <p className="max-w-md text-lg leading-8 text-black">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium md:flex-row">
          {/* <a
            className="flex h-12 w-full md:w-52 items-center justify-center gap-2 rounded-full bg-background px-5 text-foreground transition-colors hover:bg-[#646464]"
            href="/lists"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            View my lists
          </a> */}
          <Link
            className="flex h-12 w-full md:w-52 items-center justify-center gap-2 rounded-full bg-background border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-[#646464] dark:border-white/[.145] dark:hover:bg-[#646464]"
            href="/lists/create"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Create new list
          </Link>
        </div>
      </main>
    </div>
  );
}
