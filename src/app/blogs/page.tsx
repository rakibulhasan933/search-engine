'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu, Clock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { SearchDialog } from '@/components/search-dialog';
import Link from 'next/link';

const blogData = [
    {
        category: 'Content Strategy',
        articles: [
            {
                id: 1,
                title: 'Beyond the Keyword: Mapping Semantic Entities for Topical Authority',
                excerpt: 'Stop chasing single volume metrics. Learn how to structure your content architecture around entity graphs to build unshakeable topical relevance.',
                author: 'Sarah Jenkins',
                readTime: '12 min read',
                date: 'Oct 12, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
            },
            {
                id: 2,
                title: 'The Art of Long-Form Content: Capturing Search Intent at Scale',
                excerpt: 'Explore the science behind creating comprehensive content that dominates search results and drives sustained organic traffic.',
                author: 'Marcus Chen',
                readTime: '14 min read',
                date: 'Oct 10, 2024',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop'
            },
            {
                id: 3,
                title: 'Content Distribution: From Publishing to Promotion',
                excerpt: 'A deep dive into strategies that ensure your content reaches the right audience at the right time across multiple channels.',
                author: 'Elena Rodriguez',
                readTime: '9 min read',
                date: 'Oct 08, 2024',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Technical SEO',
        articles: [
            {
                id: 4,
                title: 'Core Web Vitals 2024: The New Ranking Reality',
                excerpt: 'Understanding how speed metrics directly impact your search visibility and user experience in the modern web.',
                author: 'Dr. Elias Vance',
                readTime: '15 min read',
                date: 'Oct 11, 2024',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=800&h=400&fit=crop'
            },
            {
                id: 5,
                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                excerpt: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.',
                author: 'Alex Thompson',
                readTime: '11 min read',
                date: 'Oct 09, 2024',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop'
            },
            {
                id: 6,
                title: 'Mobile-First Indexing: Optimization Strategies That Matter',
                excerpt: 'With Google\'s shift to mobile-first indexing, we break down the practical strategies that ensure your site ranks well.',
                author: 'Jordan Blake',
                readTime: '10 min read',
                date: 'Oct 07, 2024',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Algorithm & Updates',
        articles: [
            {
                id: 7,
                title: 'Deconstructing the Latest Helpful Content Update Signals',
                excerpt: 'Breaking down the signals Google uses to identify genuinely helpful content and how to ensure yours passes the test.',
                author: 'Sophia Martinez',
                readTime: '13 min read',
                date: 'Oct 13, 2024',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
            },
            {
                id: 8,
                title: 'E-E-A-T Framework: Building Expertise and Authoritativeness',
                excerpt: 'A comprehensive guide to demonstrating expertise, experience, authoritativeness, and trustworthiness to search engines.',
                author: 'Dr. Patricia Wong',
                readTime: '16 min read',
                date: 'Oct 06, 2024',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
            },
            {
                id: 9,
                title: 'Future-Proofing Your SEO Strategy Against Algorithm Changes',
                excerpt: 'Discover the timeless principles that remain constant regardless of how Google\'s algorithm evolves.',
                author: 'Michael Torres',
                readTime: '12 min read',
                date: 'Oct 05, 2024',
                image: 'https://images.unsplash.com/photo-1516534775068-bb57e39c1416?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Conversion Optimization',
        articles: [
            {
                id: 10,
                title: 'From Clicks to Conversions: The Complete Analytics Framework',
                excerpt: 'Transform your traffic into meaningful business results by implementing a comprehensive conversion tracking system.',
                author: 'Lisa Anderson',
                readTime: '11 min read',
                date: 'Oct 04, 2024',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop'
            },
            {
                id: 11,
                title: 'Landing Page Psychology: Design for Decision Making',
                excerpt: 'Understand the psychological principles that drive user decisions and apply them to your landing pages.',
                author: 'David Kim',
                readTime: '9 min read',
                date: 'Oct 03, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
            },
            {
                id: 12,
                title: 'A/B Testing Best Practices: Statistical Significance Explained',
                excerpt: 'Master the mathematics behind A/B testing to make data-driven decisions with confidence.',
                author: 'Rebecca Scott',
                readTime: '10 min read',
                date: 'Oct 02, 2024',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=800&h=400&fit=crop'
            }
        ]
    }
];

export default function BlogsPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            <Link href="/" className="text-xl font-serif font-bold text-foreground tracking-tight whitespace-nowrap hover:text-accent transition-colors">
                                The Authoritative Editorial
                            </Link>
                            <nav className="hidden md:flex items-center gap-1">
                                <a href="/blogs" className="text-sm font-medium text-accent px-3 py-2 rounded-md transition-colors">Insights</a>
                                <a href="/webinars" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Webinars</a>
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Library</a>
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Case Studies</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <SearchDialog />
                            <Button className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 text-sm font-medium">
                                Subscribe
                            </Button>
                            <button className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
                                <Menu size={20} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Page Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="space-y-6 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                        Expert Insights & Analysis
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                        Deep-dive articles exploring the technical and strategic aspects of modern digital excellence. From SEO fundamentals to cutting-edge optimization techniques.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <div className="text-sm text-muted-foreground">
                            <p>Curated by our team of experts • Updated weekly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Categories with Alternating Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="space-y-32">
                    {blogData.map((categoryGroup, categoryIdx) => (
                        <div key={categoryIdx} className="space-y-12">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-1 w-12 bg-accent rounded-full"></div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                                    {categoryGroup.category}
                                </h2>
                            </div>

                            {/* Articles Grid - Alternating Layout */}
                            <div className="space-y-12">
                                {categoryGroup.articles.map((article, idx) => (
                                    <Link
                                        key={article.id}
                                        href={`/blog/${article.id}`}
                                        className="group"
                                    >
                                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                                            {/* Image */}
                                            <div className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                                                <div className="aspect-video bg-muted overflow-hidden rounded-2xl border border-border group-hover:border-accent/30 transition-all duration-300">
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className={`space-y-5 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                                                <div className="space-y-3">
                                                    <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1.5 rounded-full">
                                                        {categoryGroup.category}
                                                    </span>
                                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                                                        {article.title}
                                                    </h3>
                                                </div>

                                                <p className="text-foreground/70 leading-relaxed">
                                                    {article.excerpt}
                                                </p>

                                                {/* Meta Information */}
                                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <User size={16} />
                                                        <span>{article.author}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Clock size={16} />
                                                        <span>{article.readTime}</span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">{article.date}</span>
                                                </div>

                                                {/* Read More Link */}
                                                <div className="pt-2 flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-200">
                                                    <span>Read Article</span>
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="border-t border-border py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-foreground/70 mb-8">
                        Subscribe to our newsletter for weekly insights on SEO, digital strategy, and web performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                        <Button className="bg-foreground text-background hover:bg-foreground/90 font-medium whitespace-nowrap">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-background/95 backdrop-blur-sm mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h6>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h6>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Editorial Guidelines</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">RSS Feed</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Newsletter</h6>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                                <Button className="bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>© 2024 The Authoritative Editorial. All rights reserved.</p>
                        <div className="flex items-center gap-6 text-xs">
                            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                            <a href="#" className="hover:text-accent transition-colors">Terms</a>
                            <a href="#" className="hover:text-accent transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}