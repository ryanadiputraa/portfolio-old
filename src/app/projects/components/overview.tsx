import { Observer } from '@/app/components/obeserver';
import { AiFillGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';

export interface IProjectOverview {
  image: string;
  title: string;
  description: string;
  liveURL?: string;
  codeURL: string;
  skilss: string[];
}

interface Props {
  overview: IProjectOverview;
  isReverse: boolean;
}

export const Overview = ({ overview, isReverse }: Props) => {
  return (
    <Observer
      animationClass="animate-fade-in"
      className={`relative flex items-start w-full min-h-80 ${
        isReverse ? 'sm:flex-row-reverse sm:text-right' : 'flex-row text-left'
      }`}
    >
      <div className="w-full sm:w-[30rem] h-full sm:h-auto p-4 sm:p-0 z-10">
        <h2 className="text-xl font-bold">{overview.title}</h2>
        <p
          className={`text-sm rounded-sm p-4 mt-4 bg-gradient-to-r ${
            isReverse
              ? 'from-white to-gray-300 dark:from-dark-black dark:to-gray-800'
              : 'from-gray-300 to-white dark:from-dark-black dark:to-gray-800'
          }`}
        >
          {overview.description}
        </p>
        <div className={`flex flex-wrap items-start gap-2 mt-8 ${isReverse ? 'sm:flex-row-reverse' : 'flex-row'}`}>
          {overview.skilss.map((skill, idx) => (
            <span key={skill} className="italic  text-accent bg-light-accent py-1 px-4 font-bold rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
        <div className={`flex items-center gap-4 mt-4 ${isReverse ? 'sm:flex-row-reverse' : 'flex-row'}`}>
          <a className="text-3xl cursor-pointer" href={overview.codeURL} target="_blank" rel="noreferrer">
            <AiFillGithub data-tooltip-id={`${overview.title}-code-1`} data-tooltip-content="Code" />
            <Tooltip id={`${overview.title}-code-1`} place="bottom" style={{ fontSize: '0.8rem' }} />
          </a>
          {overview.liveURL && (
            <a className="text-3xl cursor-pointer" href={overview.liveURL} target="_blank" rel="noreferrer">
              <BiWorld data-tooltip-id={`${overview.title}-live`} data-tooltip-content="Live" />
              <Tooltip id={`${overview.title}-live`} place="bottom" style={{ fontSize: '0.8rem' }} />
            </a>
          )}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${overview.image})` }}
        className={`bg-center bg-cover sm:bg-full self-center absolute opacity-30 sm:opacity-80 w-full sm:w-[30rem] h-full ${
          isReverse ? 'sm:left-0' : 'sm:right-0'
        }`}
      />
    </Observer>
  );
};
