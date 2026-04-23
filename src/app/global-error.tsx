"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-muted/30 px-4 py-10 md:px-6">
        <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl items-center justify-center">
          <div className="w-full rounded-2xl border bg-background p-8 text-center shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Application Error
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Something went wrong.
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              An unexpected problem interrupted the page. You can retry the request or head back to a safe page.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Go home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
