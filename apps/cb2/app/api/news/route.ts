import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // Get the token from the Authorization header
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return NextResponse.json({ message: 'Token is required' }, { status: 400 });
        }

        const newsApiUrl = 'https://chhcpportalode4.prod.acquia-sites.com/jsonapi/node/news';

        // Fetch news data from the API with the token passed in the Authorization header
        const response = await fetch(newsApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json({ error, message: 'Failed to fetch news' }, { status: response.status });
        }

        // Parse and return the news data if the request was successful
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({
            message: 'Server Error',
            details: error.message
        }, { status: 500 });
    }
}
