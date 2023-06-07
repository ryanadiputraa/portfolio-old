import { IProjectOverview, Overview } from "./components/overview"

const projects: IProjectOverview[] = [
  {
    image: "/img/udrio-api.png",
    title: "UD Rio API (Backend)",
    description:
      "Backend service for UD Rio (prototype) website with admin panel.",
    codeURL: "https://github.com/ryanadiputraa/api-udrio",
    demoURL: "https://udrio.vercel.app/",
  },
  {
    image: "/img/udrio-website.png",
    title: "UD Rio Website",
    description: "Website for UDRIO Digital Printing.",
    codeURL: "https://github.com/ryanadiputraa/udrio",
    demoURL: "https://udrio.vercel.app/",
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl w-full pt-4 pb-12 px-4 flex flex-wrap justify-center items-start gap-2 sm:gap-8">
      {projects.map((project, idx) => (
        <Overview key={idx} overview={project} />
      ))}
    </div>
  )
}
