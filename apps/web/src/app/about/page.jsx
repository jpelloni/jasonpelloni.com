import AboutPage from '@/views/AboutPage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.about);

export default function Page() {
	return <AboutPage />;
}
