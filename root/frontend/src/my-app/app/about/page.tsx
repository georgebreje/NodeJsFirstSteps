import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page'
}

export default function About() {
    return (
        <>
            <h1>page</h1>
            <Link href="/">Link to Home Page</Link>
        </>
    )
}