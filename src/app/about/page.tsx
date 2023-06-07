import { IExperience, Timeline } from "./components/timeline"

const experiences: IExperience[] = [
  {
    company: "Garena Indonesia",
    date: "Sep 2021 - Present (remote)",
    title: "Frontend Engineer",
    description:
      "Encouraged user engagement in game by delivering attractive global, regional or multi-regional in game web events by using ReactJS",
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

export default function About() {
  return (
    <div className="max-w-4xl w-full">
      <h4 className="text-3xl font-bold mb-2 text-accent">Profile</h4>
      <div className="mb-16">
        <p>
          A Software Engineer specialized in Backend Engineering mainly using
          Golang and familiarity in NodeJS with Typescript. Has experience
          building full-stack application using NextJS or ReactJS for Frontend
          development. Last year Informatics Engineering Student at Tadulako
          Univerity
        </p>
      </div>
      {/* <h4 className="text-2xl font-bold mb-2 text-accent">Timeline</h4> */}
      <div className="flex flex-col items-center gap-2">
        {experiences.map((exp, idx) => (
          <Timeline key={idx} experience={exp} />
        ))}
      </div>
    </div>
  )
}
