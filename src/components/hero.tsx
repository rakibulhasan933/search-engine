import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HomepagePayload } from '@/types/home';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WebinarSubmit from './webinar-submit';

export default function Home({ data }: { data: HomepagePayload }) {
    return (
        <div className="min-h-screen">

            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Link
                            href={`/${data.hero.categories.slug}/${data.hero.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                            {data.hero.label}
                        </Link>
                        <Link href={`/${data.hero.categories.slug}/${data.hero.slug}`}>
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-foreground hover:text-primary transition-colors">
                                {data.hero.title}
                            </h2>
                        </Link>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {data.hero.description}
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Image
                                width={48}
                                height={48}
                                src={data.hero.author.avatar}
                                alt={data.hero.author.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                            />
                            <div>
                                <p className="font-semibold text-foreground">{data.hero.author.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {data.hero.author.role} · {data.hero.author.readTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl aspect-square overflow-hidden shadow-xl ring-1 ring-border">
                        <Image
                            src={data.hero.image}
                            alt={data.hero.title}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* ── Actionable Strategies ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Section</p>
                        <h3 className="text-4xl font-bold text-foreground">{data.actionableStrategies.categories.name}</h3>
                    </div>
                    <Link
                        href={`/${data.actionableStrategies.categories.slug}`}
                        className="text-sm text-primary font-medium hover:underline flex items-center gap-1.5 group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.actionableStrategies.items.map((item, idx) => (
                        <Link key={idx} href={`/${data.actionableStrategies.categories.slug}/${item.slug}`}>
                            <Card className="p-8 h-full border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2 border-t border-border">
                                        <span>{item.date}</span>
                                        <span>·</span>
                                        <span>{item.read}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Featured Webinars ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Live & Upcoming</p>
                        <h3 className="text-4xl font-bold text-foreground">{data.webinars.title}</h3>
                    </div>
                    <Link
                        href="/webinars"
                        className="text-sm text-primary font-medium hover:underline flex items-center gap-1.5 group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.webinars.items.map((webinar) => (
                        <WebinarSubmit key={webinar.id} webinar={webinar} />
                    ))}
                </div>
            </section>

            {/* ── Content Sections ── */}
            {data.contentSections.map((section, sectionIdx) => (
                <section
                    key={`${section.categories.slug}-${sectionIdx}`}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Articles */}
                        <div className="lg:col-span-2">
                            <Link
                                href={`/${section.categories.slug}`}
                                className="inline-flex items-center gap-2 group mb-6"
                            >
                                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {section.categories.name}
                                </h3>
                                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>

                            <div className="divide-y divide-border">
                                {section.articles.map((item, idx) => (
                                    <Link
                                        key={`${item.title}-${idx}`}
                                        href={`/${section.categories.slug}/${item.slug}`}
                                        className="group block py-5 first:pt-0"
                                    >
                                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-foreground/70 leading-relaxed mb-2">{item.description}</p>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4 lg:pl-6 lg:border-l lg:border-border">
                            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Featured</p>
                            {section.sidebar.map((expert, idx) => (
                                <Link
                                    key={`${expert.title}-${idx}`}
                                    href={`/${section.categories.slug}/${expert.slug}`}
                                    className="block p-4 rounded-xl bg-muted/40 border border-border hover:border-primary/40 hover:bg-muted/60 transition-all group"
                                >
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1.5">
                                        {expert.label}
                                    </p>
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                        {expert.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}