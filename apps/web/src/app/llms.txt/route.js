import { pages } from '@/lib/pages.js';

export const dynamic = 'force-static';

export function GET() {
	const entries = Object.values(pages)
		.sort((a, b) => a.title.localeCompare(b.title))
		.map((page) => `- [${page.title}](${page.path}): ${page.description}`)
		.join('\n');

	return new Response(`## Pages\n${entries}`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
