export default function Loading() {
    return (
        <div className="min-h-screen bg-background animate-pulse">

            {/* ── Hero Skeleton ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left text block */}
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className="h-6 w-36 rounded-full bg-emerald-200 dark:bg-emerald-800" />

                            {/* Heading — 3 lines */}
                            <div className="space-y-3">
                                <div className="h-12 w-full rounded-xl bg-muted" />
                                <div className="h-12 w-5/6 rounded-xl bg-muted" />
                                <div className="h-12 w-2/3 rounded-xl bg-muted" />
                            </div>

                            {/* Sub-paragraph */}
                            <div className="space-y-2 max-w-lg">
                                <div className="h-4 w-full rounded bg-muted" />
                                <div className="h-4 w-full rounded bg-muted" />
                                <div className="h-4 w-4/5 rounded bg-muted" />
                            </div>

                            {/* CTA button */}
                            <div className="h-12 w-48 rounded-full bg-emerald-200 dark:bg-emerald-800" />
                        </div>

                        {/* Right — hero image card */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-3xl" />
                            <div className="relative bg-gradient-to-br from-emerald-400/40 to-teal-400/40 dark:from-emerald-700/40 dark:to-teal-700/40 rounded-2xl aspect-square flex flex-col items-center justify-center gap-4 shadow-2xl">
                                <div className="w-16 h-16 rounded-full bg-white/30" />
                                <div className="space-y-2 text-center">
                                    <div className="h-3 w-24 rounded bg-white/30 mx-auto" />
                                    <div className="h-7 w-36 rounded-lg bg-white/30 mx-auto" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Search & Filter Skeleton ──────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-6">

                    {/* Search bar */}
                    <div className="h-14 w-full rounded-lg bg-muted border-2 border-border" />

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2">
                        {['All Sessions', 'Local SEO', 'SEO', 'Content', 'Analytics'].map((pill) => (
                            <div
                                key={pill}
                                className="h-9 rounded-full bg-muted"
                                style={{ width: `${pill.length * 10 + 20}px` }}
                            />
                        ))}
                    </div>

                    {/* Section heading */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="h-9 w-56 rounded-xl bg-muted" />
                    </div>

                    {/* Count line */}
                    <div className="h-4 w-40 rounded bg-muted" />
                </div>
            </section>

            {/* ── Webinar Cards Grid Skeleton ───────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <WebinarCardSkeleton key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function WebinarCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border-2 border-border bg-card">

            {/* Thumbnail */}
            <div className="relative h-48 bg-muted">
                {/* Status badge top-left */}
                <div className="absolute top-4 left-4 h-5 w-16 rounded-full bg-muted-foreground/20" />
                {/* Category badge top-right */}
                <div className="absolute top-4 right-4 h-5 w-20 rounded-full bg-muted-foreground/20" />
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">

                {/* Title — 2 lines */}
                <div className="space-y-2">
                    <div className="h-5 w-full rounded bg-muted" />
                    <div className="h-5 w-4/5 rounded bg-muted" />
                </div>

                {/* Description — 2 lines */}
                <div className="space-y-1.5">
                    <div className="h-3.5 w-full rounded bg-muted" />
                    <div className="h-3.5 w-3/4 rounded bg-muted" />
                </div>

                {/* Meta — date / time / attendees */}
                <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-muted" />
                        <div className="h-3.5 w-28 rounded bg-muted" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-muted" />
                        <div className="h-3.5 w-36 rounded bg-muted" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-muted" />
                        <div className="h-3.5 w-32 rounded bg-muted" />
                    </div>
                </div>

                {/* Speaker row */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
                    <div className="flex-1 space-y-1.5">
                        <div className="h-3.5 w-3/5 rounded bg-muted" />
                        <div className="h-3 w-2/5 rounded bg-muted" />
                    </div>
                </div>

                {/* CTA button */}
                <div className="h-10 w-full rounded-lg bg-emerald-200 dark:bg-emerald-800" />
            </div>
        </div>
    );
}