import HomePage from '@/views/HomePage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.home);

export default function Page() {
	return <HomePage />;
}
