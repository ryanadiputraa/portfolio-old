import Image from 'next/image';

export interface ISkill {
  label: string;
  icon: string;
}

interface Props {
  skill: ISkill;
}

export const Skill = ({ skill }: Props) => (
  <div
    className="bg-black/10 dark:bg-white/30 backdrop-blur-md rounded-xl h-28 w-28 flex flex-col justify-center items-center
  cursor-pointer hover:scale-105 hover:shadow-sd transition-transform"
  >
    <Image src={skill.icon} width={60} height={60} alt="" />
    <span className="font-bold text-center text-sm mt-2">{skill.label}</span>
  </div>
);
