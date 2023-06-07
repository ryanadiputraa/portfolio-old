export interface IExperience {
  company: string
  date: string
  title: string
  description: string
}

interface Props {
  experience: IExperience
}

export const Timeline = ({ experience }: Props) => (
  <div className="flex w-full min-h-[5rem] gap-4">
    <div className="text-right flex-[2]">
      <h4 className="text-lg text-accent font-bold">{experience.company}</h4>
      <span className="text-sm text-gray-700 dark:text-gray-300 italic">
        {experience.date}
      </span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-black dark:bg-white my-2"></div>
      <div className="flex-grow bg-accent w-1 rounded-md"></div>
    </div>
    <div className="flex flex-col text-left items-start flex-[3]">
      <h4 className="text-lg font-bold">{experience.title}</h4>
      <p className="text-gray-700 dark:text-gray-300">
        {experience.description}
      </p>
    </div>
  </div>
)
