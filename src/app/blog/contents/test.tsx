import hljs from 'highlight.js';
import go from 'highlight.js/lib/languages/go';
hljs.registerLanguage('golang', go);

import { Content } from '../page';
import { Code } from './components/code';
import { Paragraph } from './components/paragraph';

export const test: Content = {
	meta: {
		title: 'Test Title',
		description: 'Test content blog Test content blog Test content blog Test content blog Test content blog....',
		date: new Date(),
	},
	content: () => {
		return (
			<article>
				<Paragraph>
					This is a test content that can do something This is a test content that can do something This is a test
					content that can do something This is a test content that can do something This is a test content that can do
					something This is a test content that can do something This is a test content that can do something This is a
					test content that can do something This is a test content that can do something This is a test content that
					can do something
				</Paragraph>
				<Code lang="golang" code={helloWorldCode} />
				<Paragraph>
					This is a test content that can do something This is a test content that can do something This is a test
					content that can do something This is a test content that can do something This is a test content that can do
					something This is a test content that can do something This is a test content that can do something This is a
					test content that can do something This is a test content that can do something This is a test content that
					can do something
				</Paragraph>
			</article>
		);
	},
};

const helloWorldCode = `
package main

func main() {
	print("Hello World!")
}
`;
