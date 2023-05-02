import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'My Site Name',
    template: '%s | My Site Name'
  },
  description: 'My site description...'
}

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/about">Go to about page</Link>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
