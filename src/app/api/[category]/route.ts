import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    try {
        // Replace with your actual third-party API endpoint
        const apiRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/category/${category}`);
        if (!apiRes.ok) {
            return NextResponse.json({ error: "Failed to fetch category data" }, { status: apiRes.status });
        }
        const data = await apiRes.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
