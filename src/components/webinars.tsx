'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    Calendar, Clock, Users, Search,
    Mail, Briefcase, Phone, ArrowRight, CheckCircle
} from 'lucide-react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

interface WebinarIProps {
    id: string;
    title: string;
    description: string;
    webinarDate: string;
    webinarTime: string;
    duration?: string;        // made optional – wasn't in original interface
    attendees?: number;       // made optional – wasn't in original interface
    category: string;
    categoryId: string | null;
    status: string;
    image: string;
    speaker: {
        name: string;
        title: string;
        image: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

interface CategoryIProps {
    id: string;
    name: string;
    slug: string;
}

interface Registration {
    fullName: string;
    email: string;
    company: string;
    jobTitle: string;
    phone: string;
    experience: string;
}

const EMPTY_REGISTRATION: Registration = {
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    experience: '',
};


export default function WebinarsPage({
    webinars,
    categories,
}: {
    webinars: WebinarIProps[],
    categories: CategoryIProps[]
}) {
    // FIX 1: Use string (category name) as the filter value, not the whole object
    const [selectedCategory, setSelectedCategory] = useState<string>('All Sessions');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedWebinar, setSelectedWebinar] = useState<WebinarIProps | null>(null);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [registrationData, setRegistrationData] = useState<Registration>(EMPTY_REGISTRATION);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // FIX 2: Compare against category.name (string), not the object
    const filteredWebinars = webinars?.filter((webinar) => {
        const matchesCategory =
            selectedCategory === 'All Sessions' || webinar.category === selectedCategory;
        const q = searchQuery.toLowerCase();
        const matchesSearch =
            webinar.title.toLowerCase().includes(q) ||
            webinar.speaker.name.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
    });

    const handleRegisterClick = (webinar: WebinarIProps) => {
        setSelectedWebinar(webinar);
        setRegistrationSubmitted(false);
        setRegistrationData(EMPTY_REGISTRATION);
        setIsRegistrationOpen(true);
    };

    const handleDialogClose = (open: boolean) => {
        setIsRegistrationOpen(open);
        if (!open) {
            // Small delay so the close animation plays before resetting state
            setTimeout(() => {
                setRegistrationSubmitted(false);
                setRegistrationData(EMPTY_REGISTRATION);
            }, 300);
        }
    };

    const handleRegistrationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedWebinar) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/webinars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    webinarsId: selectedWebinar.id,
                    ...registrationData,
                }),
            });
            const result = await response.json();

            if (result.success) {
                setRegistrations((prev) => [...prev, registrationData]);
                setRegistrationSubmitted(true);
                // Auto-close after success
                setTimeout(() => {
                    setIsRegistrationOpen(false);
                }, 2500);
            } else {
                alert('Registration failed: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            alert(
                'Registration failed: ' +
                (error instanceof Error ? error.message : 'Unknown error')
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    // ─── Helpers ──────────────────────────────────────────────────────────────

    const updateField =
        <K extends keyof Registration>(key: K) =>
            (e: React.ChangeEvent<HTMLInputElement>) =>
                setRegistrationData((prev) => ({ ...prev, [key]: e.target.value }));

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <div className="min-h-screen bg-background">
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100 hover:bg-emerald-100">
                                Master the Algorithm
                            </Badge>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance">
                                Live &amp; On-Demand Webinars
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                                Join industry leaders for deep-dive sessions into search architecture,
                                entity optimization, and the future of digital authority.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                                >
                                    Subscribe to Updates
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-3xl" />
                            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                                <div className="flex flex-col items-center justify-center gap-4 text-white">
                                    <Calendar className="w-16 h-16" />
                                    <div className="text-center">
                                        <p className="text-sm font-medium opacity-90">Next Webinar</p>
                                        {/* FIX 3: show first upcoming webinar date dynamically */}
                                        <p className="text-2xl font-bold">
                                            {webinars.find((w) => w.status === 'upcoming')?.webinarDate ??
                                                'Coming Soon'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Search & Filter ───────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-6">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search webinars by title or speaker..."
                            className="pl-12 py-6 text-base rounded-lg border-2 border-border hover:border-emerald-300 focus:border-emerald-500 transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category pills — FIX 4: use category.name for display and comparison */}
                    <div className="flex flex-wrap gap-2">
                        {/* "All" pill */}
                        <button
                            onClick={() => setSelectedCategory('All Sessions')}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${selectedCategory === 'All Sessions'
                                ? 'bg-emerald-600 text-white shadow-lg'
                                : 'bg-muted text-foreground hover:bg-muted/80'
                                }`}
                        >
                            All Sessions
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}   // ← FIX
                                className={`px-4 py-2 rounded-full font-medium transition-all ${selectedCategory === category.name              // ← FIX
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-muted text-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {category.name}                                     {/* ← FIX */}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <h2 className="text-3xl font-bold text-foreground">
                            {selectedCategory === 'All Sessions'
                                ? 'Upcoming Webinars'
                                : selectedCategory}
                        </h2>
                    </div>

                    <p className="text-muted-foreground">
                        Showing {filteredWebinars.length} of {webinars.length} webinars
                    </p>
                </div>
            </section>

            {/* ── Webinars Grid ─────────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {filteredWebinars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar) => (
                            <Card
                                key={webinar.id}
                                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-border hover:border-emerald-300"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-48 overflow-hidden bg-muted">
                                    <Image
                                        src={webinar.image}
                                        alt={webinar.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <Badge className="absolute top-4 right-4 bg-emerald-600 text-white hover:bg-emerald-700">
                                        {webinar.category}
                                    </Badge>
                                    {webinar.status === 'upcoming' && (
                                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white hover:bg-blue-700">
                                            Upcoming
                                        </Badge>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-emerald-600 transition-colors">
                                        {webinar.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {webinar.description}
                                    </p>

                                    {/* FIX 5: use correct field names from the interface */}
                                    <div className="space-y-2 pt-2 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 text-emerald-600" />
                                            <span>{webinar.webinarDate}</span>          {/* ← FIX */}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4 text-emerald-600" />
                                            {/* duration is optional — show only if present */}
                                            <span>
                                                {webinar.webinarTime}                   {/* ← FIX */}
                                                {webinar.duration ? ` • ${webinar.duration}` : ''}
                                            </span>
                                        </div>
                                        {webinar.attendees !== undefined && (
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Users className="w-4 h-4 text-emerald-600" />
                                                <span>{webinar.attendees.toLocaleString()} registered</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Speaker */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <Image
                                            src={webinar.speaker.image}
                                            alt={webinar.speaker.name}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm text-foreground truncate">
                                                {webinar.speaker.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate">
                                                {webinar.speaker.title}
                                            </p>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group/btn rounded-lg"
                                        onClick={() => handleRegisterClick(webinar)}
                                    >
                                        Secure Seat
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-lg text-muted-foreground">
                            No webinars found matching your criteria.
                        </p>
                    </div>
                )}
            </section>

            {/* ── Registration Modal ────────────────────────────────────────── */}
            <Dialog open={isRegistrationOpen} onOpenChange={handleDialogClose}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    {!registrationSubmitted ? (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-sans">
                                    Register for Webinar
                                </DialogTitle>
                            </DialogHeader>

                            {selectedWebinar && (
                                <div className="mb-6 p-4 bg-secondary rounded-lg">
                                    <p className="text-sm text-foreground/70">You are registering for:</p>
                                    <p className="font-sans font-bold text-lg text-foreground">
                                        {selectedWebinar.title}
                                    </p>
                                    {/* FIX 6: use webinarDate / webinarTime */}
                                    <p className="text-sm text-foreground/60 mt-2">
                                        {selectedWebinar.webinarDate} • {selectedWebinar.webinarTime}
                                        {selectedWebinar.duration ? ` • ${selectedWebinar.duration}` : ''}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Full Name *
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={registrationData.fullName}
                                        onChange={updateField('fullName')}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <span className="flex items-center gap-2">
                                            <Mail className="w-4 h-4" /> Email Address *
                                        </span>
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={registrationData.email}
                                        onChange={updateField('email')}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <span className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" /> Phone Number
                                        </span>
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={registrationData.phone}
                                        onChange={updateField('phone')}
                                        className="rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        <span className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" /> Company Name *
                                        </span>
                                    </label>
                                    <Input
                                        placeholder="Your Company"
                                        value={registrationData.company}
                                        onChange={updateField('company')}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Job Title *
                                    </label>
                                    <Input
                                        placeholder="e.g., Digital Marketing Manager"
                                        value={registrationData.jobTitle}
                                        onChange={updateField('jobTitle')}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Years of Experience *
                                    </label>
                                    <Select
                                        value={registrationData.experience}
                                        onValueChange={(value) =>
                                            setRegistrationData((prev) => ({ ...prev, experience: value }))
                                        }
                                        required
                                    >
                                        <SelectTrigger className="rounded-lg">
                                            <SelectValue placeholder="Select experience level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-2">0–2 years</SelectItem>
                                            <SelectItem value="2-5">2–5 years</SelectItem>
                                            <SelectItem value="5-10">5–10 years</SelectItem>
                                            <SelectItem value="10+">10+ years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full rounded-lg"
                                    size="lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting…' : 'Confirm Registration'}
                                </Button>

                                <p className="text-xs text-foreground/60 text-center">
                                    We&apos;ll send you a confirmation email and webinar link shortly.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-foreground mb-2">
                                Registration Confirmed!
                            </h3>
                            <p className="text-foreground/70 mb-6">
                                Check your email for the webinar link and details. We&apos;re excited to
                                see you there!
                            </p>
                            <Button onClick={() => setIsRegistrationOpen(false)} className="rounded-lg">
                                Close
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}