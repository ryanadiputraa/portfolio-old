import { Metadata } from 'next';
import { format } from 'date-fns';

import { contents } from '../page';

interface Props {
	params: { title: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { title } = params;
	const titles = title.split('-');
	const metaTitles = titles.map((title) => title.charAt(0).toUpperCase() + title.slice(1));
	const metaTitle = metaTitles.join(' ');

	return {
		title: `Ryan Adi Putra | ${metaTitle}`,
	};
}

export default function Content({ params }: Props) {
	const content = contents[params.title];

	if (!content) return <div className="min-h-screen grid place-items-center">No Content Found...</div>;

	return (
		<div className="w-full max-w-4xl px-2 sm:px-12">
			<div className="flex gap-1 py-4 mb-4 flex-col items-center border-b-[0.1rem] border-gray-600">
				<h1 className="text-center text-2xl font-bold">{content.meta.title}</h1>
				<span className="text-center text-sm">{format(content.meta.date, 'EEEE - MMMM do, yyyy')}</span>
			</div>
			<content.content />
		</div>
	);
}
