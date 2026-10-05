import '@/index.css';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = {
	...pageMetadata(pages.home),
	icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
