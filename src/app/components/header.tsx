"use client"

import Link from "next/link"
import { useState } from "react"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

import { INav } from "../layout"
import Image from "next/image"

interface Props {
  pages: INav[]
}

export const Header = ({ pages }: Props) => {
  const [isDark, setIsDark] = useState(true)

  const onToggleDarkMode = () => {
    const html = document.querySelector("html")
    isDark ? html?.classList.remove("dark") : html?.classList.add("dark")
    setIsDark(!isDark)
  }

  const onOpenSideNav = () => {
    const sideNav = document.querySelector("#side-nav")
    if (sideNav?.classList.contains("-translate-x-full")) {
      sideNav.classList.remove("-translate-x-full")
    }
  }

  return (
    <header className="flex justify-between items-center bg-white/50 dark:bg-black/50 backdrop-blur-sm px-6 sm:px-12 py-6 fixed top-0 w-full z-50">
      <Link className="flex items-center gap-2" href={"/"}>
        <Image
          src="https://img.icons8.com/external-others-inmotus-design/67/external-Code-round-icons-others-inmotus-design-11.png"
          width={20}
          height={20}
          alt=""
        />
        <h1>Ryan Adi Putra</h1>
      </Link>
      <nav className="hidden sm:inline-block">
        <ul className="flex justify-between items-center">
          {pages.map((page) => (
            <li key={page.href}>
              <Link className="p-2 mx-2" href={page.href}>
                {page.label}
              </Link>
            </li>
          ))}
          <li className="ml-4">
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
      <button className="inline-block sm:hidden">
        <GiHamburgerMenu className="text-2xl" onClick={onOpenSideNav} />
      </button>
    </header>
  )
}
