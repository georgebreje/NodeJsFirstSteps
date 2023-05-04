import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-blue-300`}>
        <nav>
          <h1>My Nav bar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
