import Link from "next/link";

export const metadata = {
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