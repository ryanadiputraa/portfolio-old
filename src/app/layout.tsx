import "./globals.css"
import { Open_Sans } from "next/font/google"

import { Header } from "./components/header"
import { SideNav } from "./components/sidenav"

const inter = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Ryan Adi Putra",
  description: "Software Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} transition-colors text-black dark:text-white bg-white dark:bg-black`}
      >
        <Header />
        <SideNav />
        <main className="pt-20 min-h-screen flex justify-center px-4 sm:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
