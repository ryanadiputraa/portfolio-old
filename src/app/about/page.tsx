import { ISkill, Skill } from "./components/skill"
import { IExperience, Timeline } from "./components/timeline"

const experiences: IExperience[] = [
  {
    company: "Garena Indonesia",
    date: "Sep 2021 - Present (remote)",
    title: "Frontend Engineer Intern",
    description:
      "Encouraged user engagement in game by delivering attractive global, regional or multi-regional in-game web events by using ReactJS",
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
  { label: "Golang", icon: "https://img.icons8.com/color/240/golang.png" },
  { label: "NodeJS", icon: "https://img.icons8.com/color/240/nodejs.png" },
  {
    label: "ReactJS",
    icon: "https://img.icons8.com/office/160/react.png",
  },
  { label: "NextJS", icon: "https://img.icons8.com/color/240/nextjs.png" },
  {
    label: "PostgreSQL",
    icon: "https://img.icons8.com/color/240/postgreesql.png",
  },
  {
    label: "Docker",
    icon: "https://img.icons8.com/color/240/docker.png",
  },
  {
    label: "Redis",
    icon: "https://img.icons8.com/color/240/redis.png",
  },
  {
    label: "Firebase",
    icon: "https://img.icons8.com/color/240/firebase.png",
  },
  {
    label: "Flutter",
    icon: "https://img.icons8.com/color/240/flutter.png",
  },
]

export default function About() {
  return (
    <div className="max-w-4xl w-full pt-4 pb-12 px-4">
      <h4 className="text-3xl font-bold mb-4 text-accent text-center sm:text-left">
        Profile
      </h4>
      <div>
        <p className="text-center sm:text-left">
          A Software Engineer specialized in Backend Engineering mainly using
          Golang and familiarity in NodeJS with Typescript. Has experience
          building full-stack application using NextJS or ReactJS for Frontend
          development. Last year Informatics Engineering Student at Tadulako
          Univerity
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 mt-20">
        {experiences.map((exp, idx) => (
          <Timeline key={idx} experience={exp} />
        ))}
      </div>
      <h4 className="text-3xl font-bold mb-4 text-accent mt-20 text-center sm:text-left">
        Skills
      </h4>
      <div className="flex flex-wrap justify-center items-start gap-[2.25rem]">
        {skills.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </div>
    </div>
  )
}
