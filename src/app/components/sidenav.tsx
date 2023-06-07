"use client"

import Link from "next/link"
import { useState } from "react"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"
import { IoMdArrowBack } from "react-icons/io"

import { INav } from "../layout"

interface Props {
  pages: INav[]
}

export const SideNav = ({ pages }: Props) => {
  const [isDark, setIsDark] = useState(true)

  const onCloseSideNav = () => {
    const sideNav = document.querySelector("#side-nav")
    if (!sideNav?.classList.contains("-translate-x-full")) {
      sideNav?.classList.add("-translate-x-full")
    }
  }

  const onToggleDarkMode = () => {
    const html = document.querySelector("html")
    isDark ? html?.classList.remove("dark") : html?.classList.add("dark")
    setIsDark(!isDark)
  }

  return (
    <nav
      id="side-nav"
      className="flex flex-col items-start w-full min-h-screen fixed z-10 top-0 left-0 p-6 bg-white/95 dark:bg-black/95 -translate-x-full transition-transform "
    >
      <div className="flex justify-between items-center w-full mb-12">
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
        <button className="text-2xl self-end" onClick={onCloseSideNav}>
          <IoMdArrowBack />
        </button>
      </div>
      <ul className="flex flex-col w-full gap-4">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              className="border-b-2 border-solid border-black dark:border-white inline-block w-full py-2"
              href={page.href}
              onClick={onCloseSideNav}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
