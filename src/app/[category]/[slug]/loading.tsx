// app/blogs/[slug]/loading.tsx
// Uses: shadcn/ui <Skeleton /> + <Card /> + Tailwind CSS only

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function BlogPostSkeleton() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* ── Sticky header ── */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="mx-auto max-w-4xl px-4 py-3.5 sm:px-6 lg:px-8">
                    {/* "← Back to {category}" link */}
                    <Skeleton className="h-5 w-36 rounded" />
                </div>
            </header>

            <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                <article className="space-y-8">

                    {/* ── Category badge + title + excerpt ── */}
                    <div className="space-y-6">

                        {/* Category pill */}
                        <div className="inline-flex items-center">
                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>

                        {/* H1 title — 3 lines mimicking the large serif heading */}
                        <div className="space-y-3">
                            <Skeleton className="h-12 w-full rounded-lg md:h-14 lg:h-16" />
                            <Skeleton className="h-12 w-5/6 rounded-lg md:h-14 lg:h-16" />
                            <Skeleton className="h-12 w-3/4 rounded-lg md:h-14 lg:h-16" />
                        </div>

                        {/* Excerpt — 2 lines */}
                        <div className="space-y-2.5">
                            <Skeleton className="h-6 w-full rounded" />
                            <Skeleton className="h-6 w-4/5 rounded" />
                        </div>
                    </div>

                    {/* ── Author + date bar ── */}
                    <div className="flex flex-col gap-6 border-y border-border py-6 md:flex-row md:items-center md:gap-8">

                        {/* Avatar + name / title */}
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-14 w-14 shrink-0 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-32 rounded" />
                                <Skeleton className="h-3.5 w-24 rounded" />
                            </div>
                        </div>

                        {/* Published date + read time */}
                        <div className="flex flex-wrap gap-6 md:gap-8">
                            <Skeleton className="h-4 w-36 rounded" />
                            <Skeleton className="h-4 w-20 rounded" />
                        </div>
                    </div>

                    {/* ── Hero image ── */}
                    <Skeleton className="aspect-video w-full rounded-2xl" />

                    {/* ── Article body ── */}
                    <div className="space-y-10">

                        {/* Paragraph 1 */}
                        <div className="space-y-2.5">
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-[92%] rounded" />
                            <Skeleton className="h-4 w-3/4 rounded" />
                        </div>

                        {/* Paragraph 2 */}
                        <div className="space-y-2.5">
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-[88%] rounded" />
                            <Skeleton className="h-4 w-3/5 rounded" />
                        </div>

                        {/* H2 / H3 heading */}
                        <Skeleton className="h-7 w-64 rounded-lg" />

                        {/* Paragraph 3 */}
                        <div className="space-y-2.5">
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-[85%] rounded" />
                        </div>

                        {/* Blockquote — border-l-2 strip + indented lines */}
                        <div className="flex gap-4 border-l-2 border-border pl-4">
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-full rounded" />
                                <Skeleton className="h-4 w-5/6 rounded" />
                            </div>
                        </div>

                        {/* Paragraph 4 */}
                        <div className="space-y-2.5">
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-[93%] rounded" />
                            <Skeleton className="h-4 w-4/5 rounded" />
                        </div>
                    </div>

                    {/* ── Author bio card ── */}
                    <div className="border-t border-border pt-8">
                        <Card className="rounded-xl border border-border bg-muted/40 p-6">
                            <div className="flex gap-4">
                                <Skeleton className="h-16 w-16 shrink-0 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-36 rounded" />
                                    <Skeleton className="h-3.5 w-28 rounded" />
                                    {/* Bio text — 2 lines */}
                                    <div className="mt-3 space-y-2">
                                        <Skeleton className="h-3.5 w-full rounded" />
                                        <Skeleton className="h-3.5 w-4/5 rounded" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                </article>
            </main>

            {/* ── Related articles section ── */}
            <section className="border-t border-border bg-muted/20 py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* "Related Articles" heading */}
                    <Skeleton className="mb-8 h-10 w-56 rounded-lg" />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[0, 1, 2].map((i) => (
                            <Card
                                key={i}
                                className="rounded-xl border border-border bg-card/50 p-6"
                            >
                                <div className="space-y-4">
                                    {/* Category pill */}
                                    <Skeleton className="h-5 w-20 rounded-full" />

                                    {/* Title — 2 lines */}
                                    <div className="space-y-2">
                                        <Skeleton className="h-5 w-full rounded" />
                                        <Skeleton className="h-5 w-4/5 rounded" />
                                    </div>

                                    {/* Date | read-time | arrow */}
                                    <div className="flex items-center gap-4 border-t border-border pt-4">
                                        <Skeleton className="h-4 w-24 rounded" />
                                        <Skeleton className="h-4 w-16 rounded" />
                                        <Skeleton className="ml-auto h-4 w-4 rounded" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}