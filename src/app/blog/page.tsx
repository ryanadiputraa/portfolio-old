import Link from 'next/link';
import { JSX } from 'react';

import { test } from './contents/test';
import { format } from 'date-fns';

export interface Content {
	meta: {
		title: string;
		description: string;
		date: Date;
	};
	content: () => JSX.Element;
}

const trimTitle = (title: string) => title.toLocaleLowerCase().replace(' ', '-');

export const contents: { [key: string]: Content } = {
	[trimTitle(test.meta.title)]: test,
	[trimTitle('Test Second Content')]: test,
};

export default function Blog() {
	return (
		<div className="flex flex-col w-full max-w-4xl gap-10 px-4 sm:px-12">
			{Object.keys(contents).map((title) => {
				const metaContent = contents[title].meta;
				return (
					<div key={title} className="flex flex-col items-start">
						<Link href={`/blog/${title}`}>
							<h2 className="text-3xl font-bold underline cursor-pointer mb-1">{metaContent.title}</h2>
						</Link>
						<p className="">{metaContent.description}</p>
						<span className="text-xs font-thin">{format(metaContent.date, 'EEEE - MMMM do, yyyy')}</span>
					</div>
				);
			})}
		</div>
	);
}
