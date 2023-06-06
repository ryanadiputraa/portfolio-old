import "./globals.css"
import { Open_Sans } from "next/font/google"

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
