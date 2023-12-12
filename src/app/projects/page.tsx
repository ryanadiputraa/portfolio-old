import { IProjectOverview, Overview } from './components/overview';

const projects: IProjectOverview[] = [
  {
    image: '/img/ggen.png',
    title: 'ggen',
    description: 'A CLI for generating go project that use idiomatic go project standard layout',
    codeURL: 'https://github.com/ryanadiputraa/ggen',
    skilss: ['Go', 'Cobra', 'Bash'],
  },
  {
    image: '/img/spotwave.png',
    title: 'Spotwave',
    description:
      'Spotify playlist MP3 downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist and searchs it on Youtube, then convert and download the MP3.',
    codeURL: 'https://github.com/ryanadiputraa/spotwave',
    liveURL: 'https://spotwave.vercel.app',
    skilss: ['Go', 'Fiber', 'Docker', 'ReactJS', 'Typescript', 'Tailwind CSS'],
  },
  {
    image: '/img/udrio-website.png',
    title: 'UD Rio Digital Printing Website',
    description:
      'Website for UD Rio Digital Printing, allowing customer to place orders online with automatic email notification and Admin Panel for website admin to manage products and customer orders',
    liveURL: 'https://udrio.vercel.app/',
    codeURL: 'https://github.com/ryanadiputraa/api-udrio',
    skilss: ['Go', 'Gin', 'NextJS', 'PostgreSQL', 'Redis', 'Docker', 'Firebase', 'Typescript', 'Tailwind CSS'],
  },
  {
    image: '/img/tapcartt.png',
    title: 'TapCart',
    description: 'Mobile application for customer to checkout with QR Code and for store to manage price and supplies.',
    codeURL: 'https://github.com/CPNG-99/api-tapcart',
    skilss: ['NodeJS', 'Typescript', 'MongoDB', 'Express', 'Flutter'],
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl w-full pt-12 pb-12 px-4 flex flex-wrap justify-center items-start gap-40">
      {projects.map((project, idx) => (
        <Overview key={project.title} overview={project} isReverse={(idx + 1) % 2 === 0} />
      ))}
    </div>
  );
}
