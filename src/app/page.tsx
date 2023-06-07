import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { Tooltip } from "react-tooltip"

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl sm:text-4xl">Hi, I'm Ryan 👋</h1>
      <h4 className="text-sm sm:text-base mt-6 max-w-2xl text-center text-gradient">
        I'm a Software Engineer based in Palu, Indonesia. Specialized in Backend
        Development with experience building full-stack applications. I'm
        passionate about building software to solve real world problems and
        learning new things or technology while doing it.
      </h4>
      <div className="flex justify-center items-center mt-6 text-3xl sm:text-5xl gap-4 sm:gap-8">
        <a href="https://github.com/ryanadiputraa">
          <AiFillGithub
            data-tooltip-id="github-tooltip"
            data-tooltip-content="Github"
          />
          <Tooltip
            id="github-tooltip"
            place="bottom"
            style={{ fontSize: "0.7rem" }}
          />
        </a>
        <a
          className="text-blue-400"
          href="https://www.linkedin.com/in/ryanadiputraa/"
        >
          <AiFillLinkedin
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="Linkedin"
          />
          <Tooltip
            id="linkedin-tooltip"
            place="bottom"
            style={{ fontSize: "0.7rem" }}
          />
        </a>
        <a className="text-blue-600" href="mailto:ryannadiputraa@gmail.com">
          <MdEmail
            data-tooltip-id="email-tooltip"
            data-tooltip-content="Email"
          />
          <Tooltip
            id="email-tooltip"
            place="bottom"
            style={{ fontSize: "0.7rem" }}
          />
        </a>
        <a className="text-red-400" href="/file/RESUME.docx.pdf" download>
          <HiDocumentText
            data-tooltip-id="resume-tooltip"
            data-tooltip-content="Resume"
          />
          <Tooltip
            id="resume-tooltip"
            place="bottom"
            style={{ fontSize: "0.7rem" }}
          />
        </a>
      </div>
    </div>
  )
}
