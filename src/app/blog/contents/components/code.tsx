'use client';

import hljs from 'highlight.js';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
	lang: string;
	code: string;
}

export const Code = ({ lang, code }: Props) => {
	const [copied, setCopied] = useState(false);

	const highlightSyntax = (lang: string, code: string) => hljs.highlight(code, { language: lang }).value;

	useEffect(() => {
		if (!copied) return;
		const t = setTimeout(() => {
			setCopied(false);
		}, 2000);
		return () => clearTimeout(t);
	}, [copied]);

	return (
		<pre className="relative">
			<CopyToClipboard text={code} onCopy={() => setCopied(true)}>
				<button className="bg-accent font-bold p-1 px-2 absolute top-[15%] right-[5%] sm:right-[2%] text-sm sm:text-normal">
					{copied ? 'Copied!' : 'Copy'}
				</button>
			</CopyToClipboard>
			<code
				className="p-4 font inline-block bg-dark-black my-4 w-full text-white rounded-md text-sm sm:text-normal"
				dangerouslySetInnerHTML={{
					__html: highlightSyntax(lang, code),
				}}
			/>
		</pre>
	);
};
