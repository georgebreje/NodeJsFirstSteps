import { limiter } from "../config/limiter";

export async function GET(request: Request) {
    const remaining = await limiter.removeTokens(1);
    console.log('remaining: ', remaining);

    if (remaining < 0 ) {
        
    }

    return new Response('Hello, Next.Js')
}