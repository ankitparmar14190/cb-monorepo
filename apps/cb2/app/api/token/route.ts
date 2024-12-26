import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const {
            client_id,
            client_secret,
            username,
            password,
            grant_type,
            scope
        } = await req.json();

        const response = await fetch('https://chhcpportalode4.prod.acquia-sites.com/oauth/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id,
                client_secret,
                username,
                password,
                grant_type,
                scope
            })
        });

        if(!response.ok) {
            const error = await response.json();
            return NextResponse.json(
                { error, message: "Failed to fetch token" },
                {status: response.status }
            )
        };

        const data = await response.json();

        return NextResponse.json(data, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({message: "server error", details: error.message}, { status: 500 })
    }
}