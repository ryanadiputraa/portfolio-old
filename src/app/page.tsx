import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi"

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl">Hi, I'm Ryan 👋</h1>
      <h4 className="text-xs sm:text-sm mt-6 max-w-2xl text-center text-gradient">
        I'm a Software Engineer based in Palu, Indonesia. Specialized in Backend
        Development with experience building full-stack applications. I'm
        passionate about building software to solve real world problems and
        learning new things or technology while doing it.
      </h4>
      <div className="flex justify-center items-center mt-6 text-3xl sm:text-5xl gap-8">
        <a href="https://github.com/ryanadiputraa">
          <AiFillGithub />
        </a>
        <a
          className="text-blue-400"
          href="https://www.linkedin.com/in/ryanadiputraa/"
        >
          <AiFillLinkedin />
        </a>
        <a className="text-red-400" href="/file/RESUME.docx.pdf" download>
          <HiDocumentText />
        </a>
      </div>
    </div>
  )
}
