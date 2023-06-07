"use client"

import Image from "next/image"
import { useState } from "react"
import { BsFileEarmarkCodeFill } from "react-icons/bs"
import { BiWorld } from "react-icons/bi"
import { Tooltip } from "react-tooltip"

export interface IProjectOverview {
  image: string
  title: string
  description: string
  codeURL: string
  demoURL: string
}

interface Props {
  overview: IProjectOverview
}

export const Overview = ({ overview }: Props) => {
  const [onHover, setOnHover] = useState(false)

  return (
    <div className="relative overflow-hidden w-[26rem] h-auto sm:h-60 rounded-xl">
      <Image
        className={`absolute w-full h-full object-cover transition-all brightness-50 ${
          onHover ? "scale-110" : ""
        }`}
        src={overview.image}
        width={400}
        height={200}
        alt=""
      />
      <div
        className={`text-white w-full h-full flex flex-col justify-start items-start px-6 pt-24 pb-8 bg-gray-400/10 transition-transform backdrop-blur-sm ${
          onHover ? "sm:backdrop-blur-sm" : "sm:backdrop-blur-xs"
        }`}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <h2 className="font-bold text-xl text-accent">{overview.title}</h2>
        <p className="text-sm mt-1">{overview.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <a
            className="text-3xl cursor-pointer"
            href={overview.codeURL}
            target="_blank"
            rel="noreferrer"
          >
            <BsFileEarmarkCodeFill
              data-tooltip-id={`${overview.image}-code`}
              data-tooltip-content="Code"
            />
            <Tooltip
              id={`${overview.image}-code`}
              place="bottom"
              style={{ fontSize: "0.7rem" }}
            />
          </a>
          <a
            className="text-orange-400 text-4xl cursor-pointer"
            href={overview.demoURL}
            target="_blank"
            rel="noreferrer"
          >
            <BiWorld
              data-tooltip-id={`${overview.image}-demo`}
              data-tooltip-content="Live"
            />
            <Tooltip
              id={`${overview.image}-demo`}
              place="bottom"
              style={{ fontSize: "0.7rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
