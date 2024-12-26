// app/api/hello/route.js

export async function GET(request: any) {
  // Extract the token from request headers
  const token = request.headers.get('x-api-token');
  
  // Get the secret token from environment variables
  const validToken = process.env.API_SECRET_TOKEN;

  // Check if the token is missing or invalid
  if (token !== validToken) {
    return new Response(JSON.stringify({ message: 'Forbidden' }), { status: 403 });
  }

  // If the token is valid, return the response
  return new Response(JSON.stringify({ message: 'Hello, from API!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
