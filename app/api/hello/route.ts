export async function GET() {
    return new Response("Hello from the Next.js route handler!", {
        status: 200,
    });
}

export async function POST() {
    return new Response("Thankyou for posting to this handler!", {
        status: 200,
    })
}