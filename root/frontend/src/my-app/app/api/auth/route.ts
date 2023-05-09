import { NextResponse } from "next/server";

type User = {
    username: string,
    password: string
}

export async function POST(request: Request) {
    const data: User = await request.json();
    console.log('data: ', data);

    const { username, password } = data;
    console.log(username)
    console.log(password)
    const res = await fetch('http://localhost:3500/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
    console.log(res.status)
    return res.json();
}