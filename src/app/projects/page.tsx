import { IProjectOverview, Overview } from './components/overview';

const projects: IProjectOverview[] = [
	{
		image: '/img/flows.png',
		title: 'Flows Microservices',
		description:
			'Microservices for helping users to manage financial and get insight based on their financial transactions',
		codeURL: 'https://github.com/ryanadiputraa/flows-microservices',
		skilss: ['Golang', 'NodeJS', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Docker', 'Typescript', 'Nginx'],
	},
	{
		image: '/img/udrio-website.png',
		title: 'UD Rio Digital Printing Website',
		description:
			'Website for UD Rio Digital Printing, allowing customer to place orders online with automatic email notification and Admin Panel for website admin to manage products and customer orders',
		liveURL: 'https://udrio.vercel.app/',
		codeURL: 'https://github.com/ryanadiputraa/api-udrio',
		secondCodeURL: 'https://github.com/ryanadiputraa/udrio',
		skilss: [
			'Golang',
			'Gin',
			'NextJS',
			'OAuth2',
			'JWT',
			'PostgreSQL',
			'Redis',
			'Docker',
			'Firebase',
			'Typescript',
			'Tailwind CSS',
		],
	},
	{
		image: '/img/tapcartt.png',
		title: 'TapCart',
		description: 'Mobile application for customer to checkout with QR Code and for store to manage price and supplies.',
		codeURL: 'https://github.com/CPNG-99/api-tapcart',
		secondCodeURL: 'https://github.com/CPNG-99/tapcart',
		skilss: ['NodeJS', 'Typescript', 'MongoDB', 'Express', 'Flutter', 'Dart', 'QR Code'],
	},
];

export default function Projects() {
	return (
		<div className="max-w-4xl w-full pt-12 pb-12 px-4 flex flex-wrap justify-center items-start gap-40">
			{projects.map((project, idx) => (
				<Overview key={idx} overview={project} isReverse={(idx + 1) % 2 === 0} />
			))}
		</div>
	);
}
