import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-muted/30 px-4 py-10 md:px-6">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl items-center justify-center">
                <div className="w-full rounded-2xl border bg-background p-8 text-center shadow-sm md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">404</p>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Page not found.</h1>
                    <p className="mt-4 text-base text-muted-foreground">
                        The page you are looking for does not exist or may have been moved.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                        >
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
