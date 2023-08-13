import { ISkill, Skill } from "./components/skill"
import { IExperience, Timeline } from "./components/timeline"

const experiences: IExperience[] = [
  {
    company: "Garena Indonesia",
    date: "Feb 2022 - present",
    title: "Frontend Engineer (freelance)",
    description:
      "Involved in research and improvement of web development technologies used in companies such as Audio component for MicroFrontend, TeleportHQ for landing page automation & Million JS for animation.",
  },
  {
    company: "Garena Indonesia",
    date: "Sep 2021 - Feb 2022",
    title: "Frontend Engineer Intern",
    description:
      "Encouraged user engagement in game by delivering attractive global, regional or multi-regional in-game web events by using ReactJS.",
  },
  {
    company: "Dicoding Academy (Kampus Merdeka)",
    date: "Feb 2022 – Aug 2022",
    title: "Multi Platform and Backend",
    description:
      "Developed a multi platform mobile app using Flutter to simplify shopping on physical stores by scanning QR Code that generated from NodeJS backend service.",
  },
  {
    company: "Glints Academy (Kampus Merdeka)",
    date: "Aug 2021 – Feb 2022",
    title: "International Internship Student",
    description:
      "Developed a simple web application to learn to work in a team and improve code quality by learning clean code by being involved in code review with a mentor.",
  },
]

const skills: ISkill[] = [
  { label: "Golang", icon: "https://img.icons8.com/color/144/golang.png" },
  { label: "NodeJS", icon: "https://img.icons8.com/color/144/nodejs.png" },
  {
    label: "ReactJS",
    icon: "https://img.icons8.com/office/160/react.png",
  },
  { label: "NextJS", icon: "https://img.icons8.com/color/144/nextjs.png" },
  {
    label: "PostgreSQL",
    icon: "https://img.icons8.com/color/144/postgreesql.png",
  },
  {
    label: "MongoDB",
    icon: "https://img.icons8.com/color/144/mongodb.png",
  },
  {
    label: "Docker",
    icon: "https://img.icons8.com/color/144/docker.png",
  },
  {
    label: "Redis",
    icon: "https://img.icons8.com/color/144/redis.png",
  },
  {
    label: "Javascript",
    icon: "https://img.icons8.com/color/144/javascript.png",
  },
  {
    label: "Typescript",
    icon: "https://img.icons8.com/color/144/typescript.png",
  },
  {
    label: "Tailwind CSS",
    icon: "https://img.icons8.com/color/144/tailwindcss.png",
  },
  {
    label: "Flutter",
    icon: "https://img.icons8.com/color/144/flutter.png",
  },
]

export default function About() {
  return (
    <div className="max-w-4xl w-full pt-12 pb-12 px-4 flex flex-col gap-12">
      <section>
        <h4 className="text-3xl mb-4 font-bold text-accent text-center">Profile</h4>
        <div>
          <p className="text-center">
            A Software Engineer specialized in Backend Engineering mainly using Golang with experiences building
            full-stack application using NextJS or ReactJS for Frontend development. Last year Informatics Engineering
            Student at Tadulako Univerity.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-4">
          {experiences.map((exp, idx) => (
            <Timeline key={idx} experience={exp} />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-3xl mb-6 font-bold text-accent text-center">Tech Stacks</h4>
        <div className="flex flex-wrap justify-center items-start gap-[2.25rem]">
          {skills.map((skill, idx) => (
            <Skill key={idx} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  )
}
