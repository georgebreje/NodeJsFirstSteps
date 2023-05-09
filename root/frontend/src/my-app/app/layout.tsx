"use client"

import { SunnyIcon } from '@/public/icons/SunnyIcon'
import './globals.css'
import { Inter } from 'next/font/google'
import { MoonIcon } from '@/public/icons/MoonIcon'
import { MonitorIcon } from '@/public/icons/MonitorIcon'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState("system");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (localStorage.theme === 'dark' || (!("theme" in localStorage) && systemTheme.matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.theme = 'dark'
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.theme = 'light'
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme])

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="dark:bg-sky-800">
          <h1 className="text-gray-900 dark:text-white">My Nav bar</h1>
          <div className="fixed top-5 right-10 dark:bg-slate-800 bg-gray-100 rounded">
            <button key={"light"} className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600 dark:text-gray-300" onClick={() => setTheme("light")}>
              <SunnyIcon></SunnyIcon>
            </button>
            <button key={"dark"} className="w-8 h-8 leading-9 text-xl rounded-full m-1 dark:text-sky-600 text-gray-300" onClick={() => setTheme("dark")}>
              <MoonIcon></MoonIcon>
            </button>
          </div>
        </nav>
        {children}
      </body>

    </html>
  )
}
