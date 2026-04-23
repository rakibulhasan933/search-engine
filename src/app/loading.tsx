// app/loading.tsx
// Next.js automatically shows this while the page's async server data is fetching.

function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={`bg-muted animate-pulse rounded-md ${className ?? ''}`}
        />
    );
}

export default function HomeLoading() {
    return (
        <div className="min-h-screen">

            {/* ── Hero Skeleton ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: text */}
                    <div className="space-y-6">
                        {/* label */}
                        <Skeleton className="h-4 w-28" />
                        {/* title — 3 lines */}
                        <div className="space-y-3">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-5/6" />
                            <Skeleton className="h-12 w-4/6" />
                        </div>
                        {/* description — 2 lines */}
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-11/12" />
                            <Skeleton className="h-5 w-3/4" />
                        </div>
                        {/* author row */}
                        <div className="flex items-center gap-4 pt-2">
                            <Skeleton className="w-12 h-12 rounded-full shrink-0" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-48" />
                            </div>
                        </div>
                    </div>
                    {/* Right: image square */}
                    <Skeleton className="rounded-2xl aspect-square w-full" />
                </div>
            </section>

            {/* ── Actionable Strategies Skeleton ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* section header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-9 w-56" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                </div>
                {/* 2-col cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[0, 1].map((i) => (
                        <div
                            key={i}
                            className="p-8 border border-border rounded-lg space-y-3"
                        >
                            <Skeleton className="h-7 w-3/4" />
                            <Skeleton className="h-7 w-1/2" />
                            <div className="space-y-2 pt-1">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-11/12" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                            <div className="flex items-center gap-3 pt-3 border-t border-border">
                                <Skeleton className="h-3 w-20" />
                                <Skeleton className="h-3 w-16" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Featured Webinars Skeleton ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* section header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-9 w-52" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                </div>
                {/* 3-col webinar cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="border border-border rounded-lg overflow-hidden flex flex-col"
                        >
                            {/* image */}
                            <Skeleton className="h-44 w-full rounded-none" />
                            {/* body */}
                            <div className="p-5 flex flex-col flex-1 space-y-3">
                                {/* title */}
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-4/5" />
                                {/* description */}
                                <div className="space-y-1.5">
                                    <Skeleton className="h-3.5 w-full" />
                                    <Skeleton className="h-3.5 w-11/12" />
                                </div>
                                {/* meta rows */}
                                <div className="space-y-2 pt-3 border-t border-border">
                                    <Skeleton className="h-3 w-36" />
                                    <Skeleton className="h-3 w-40" />
                                    <Skeleton className="h-3 w-32" />
                                </div>
                                {/* speaker */}
                                <div className="flex items-center gap-2.5 pt-3 border-t border-border">
                                    <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                                    <div className="space-y-1.5 flex-1">
                                        <Skeleton className="h-3 w-28" />
                                        <Skeleton className="h-2.5 w-36" />
                                    </div>
                                </div>
                                {/* button */}
                                <Skeleton className="h-9 w-full rounded-lg mt-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Content Sections Skeleton ── (repeat 2 sections) */}
            {[0, 1].map((sectionIdx) => (
                <section
                    key={sectionIdx}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Articles col */}
                        <div className="lg:col-span-2">
                            {/* section title */}
                            <Skeleton className="h-9 w-48 mb-6" />
                            {/* article list */}
                            <div className="divide-y divide-border">
                                {[0, 1, 2].map((idx) => (
                                    <div key={idx} className="py-5 first:pt-0 space-y-2">
                                        <Skeleton className="h-6 w-3/4" />
                                        <div className="space-y-1.5">
                                            <Skeleton className="h-3.5 w-full" />
                                            <Skeleton className="h-3.5 w-5/6" />
                                        </div>
                                        <Skeleton className="h-3 w-20" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar col */}
                        <div className="space-y-4 lg:pl-6 lg:border-l lg:border-border">
                            <Skeleton className="h-3 w-16 mb-2" />
                            {[0, 1].map((idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl border border-border space-y-2"
                                >
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-4/5" />
                                    <Skeleton className="h-3 w-28" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}