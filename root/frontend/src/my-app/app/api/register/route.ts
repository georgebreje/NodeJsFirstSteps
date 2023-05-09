import { NextResponse } from "next/server";

type User = {
    username: string,
    password: string
}

export async function POST(request: Request) {
    // const data = await request.formData();
    // const username = data.get("username");
    // const password = data.get("password");  
    const data: User = await request.json();
    const { username, password } = data;
    console.log(username)
    console.log(password)

    const res = await fetch('http://localhost:3500/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
    console.log(res.status)

    return res;
}