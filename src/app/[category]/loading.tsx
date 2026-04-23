// app/[category]/loading.tsx
// Uses: shadcn/ui <Skeleton /> + Tailwind CSS only

import { Skeleton } from "@/components/ui/skeleton";

/** One alternating article row — mirrors the real page's grid layout */
function ArticleRowSkeleton({ reverse = false }: { reverse?: boolean }) {
    return (
        <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2">
            {/* ── Image placeholder ── */}
            <div className={reverse ? "md:order-2" : "md:order-1"}>
                <Skeleton className="aspect-video w-full rounded-2xl" />
            </div>

            {/* ── Text block ── */}
            <div className={`space-y-5 ${reverse ? "md:order-1" : "md:order-2"}`}>

                {/* Category badge + title */}
                <div className="space-y-3">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-full rounded-lg" />
                        <Skeleton className="h-8 w-4/5 rounded-lg" />
                    </div>
                </div>

                {/* Excerpt — 3 lines */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                </div>

                {/* Meta row: author · read-time · date */}
                <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    <Skeleton className="h-4 w-28 rounded" />
                    <Skeleton className="h-4 w-20 rounded" />
                    <Skeleton className="h-4 w-24 rounded" />
                </div>

                {/* "Read Article" CTA text */}
                <Skeleton className="h-5 w-32 rounded" />
            </div>
        </div>
    );
}

export default function CategoryPageSkeleton() {
    return (
        <div className="min-h-screen bg-background">

            {/* ── Header ── */}
            <header className="mx-2 px-4 py-10 sm:px-3 md:py-12 lg:px-4">
                <div className="w-full space-y-6">
                    {/* Category H1 */}
                    <Skeleton className="h-14 w-64 rounded-xl md:h-16" />
                    {/* "N articles in this category" */}
                    <Skeleton className="h-6 w-40 rounded" />
                    {/* "Curated by our team…" subline */}
                    <Skeleton className="h-4 w-72 rounded" />
                </div>
            </header>

            {/* ── Article list ── */}
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="divide-y divide-border">
                    {/* 3 rows with the same left/right alternating pattern as the real page */}
                    <ArticleRowSkeleton reverse={false} />
                    <ArticleRowSkeleton reverse={true} />
                    <ArticleRowSkeleton reverse={false} />
                </div>
            </div>

        </div>
    );
}