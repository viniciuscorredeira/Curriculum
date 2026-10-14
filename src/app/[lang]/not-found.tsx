import Link from "next/link";
import { getDictionary } from "@/content/ui";

export default function NotFound() {
  const pt = getDictionary("pt").notFound;
  const en = getDictionary("en").notFound;

  return (
    <main className="mx-auto flex min-h-dvh max-w-6xl flex-col items-start justify-center gap-5 px-4 sm:px-6 lg:px-8">
      <p className="font-heading text-lg font-bold text-accent">404</p>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        {pt.title} <span className="text-subtle">/ {en.title}</span>
      </h1>
      <div className="flex gap-5 text-base font-semibold">
        <Link href="/pt" className="underline underline-offset-4 hover:text-accent">
          {pt.back}
        </Link>
        <Link href="/en" className="underline underline-offset-4 hover:text-accent">
          {en.back}
        </Link>
      </div>
    </main>
  );
}
