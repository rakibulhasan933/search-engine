// api/webinars/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const webinarsId = data.webinarsId;
        if (!webinarsId) {
            return NextResponse.json(
                { success: false, error: 'Missing webinarsId' },
                { status: 400 }
            );
        }

        const thirdPartyResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/webinars/${webinarsId}/submissions`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data), // body still carries webinarsId — the route validates it matches
            }
        );

        const result = await thirdPartyResponse.json();

        if (!thirdPartyResponse.ok) {
            return NextResponse.json(
                { success: false, error: result.error ?? 'Registration failed' },
                { status: thirdPartyResponse.status }
            );
        }

        return NextResponse.json({ success: true, result });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}