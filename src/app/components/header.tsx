"use client"

import Link from "next/link"
import { useState } from "react"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

export const Header = () => {
  const [isDark, setIsDark] = useState(true)

  const onToggleDarkMode = () => {
    const html = document.querySelector("html")
    isDark ? html?.classList.remove("dark") : html?.classList.add("dark")
    setIsDark(!isDark)
  }

  return (
    <header className="flex justify-between items-center px-12 py-6 fixed top-0 w-full">
      <Link href={"/"}>
        <h1>Ryan Adi Putra</h1>
      </Link>
      <nav>
        <ul className="flex justify-between items-center gap-6">
          <li>
            <Link href={"/about"}>About Me</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <div
              className="flex justify-between items-center bg-black dark:bg-white py-1 w-[3.15rem] px-1 rounded-full cursor-pointer"
              onClick={onToggleDarkMode}
            >
              <div
                className={`bg-white dark:bg-black w-4 h-4 rounded-full absolute transition-transform
                ${isDark ? "" : "translate-x-6"}`}
              />
              <BsSunFill
                className={`text-white transition-opacity ${
                  isDark ? "opacity-0" : ""
                }`}
              />
              <BsMoonStarsFill
                className={`text-black transition-opacity ${
                  isDark ? "" : "opacity-0"
                }`}
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
