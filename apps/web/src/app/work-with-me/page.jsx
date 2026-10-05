import WorkWithMePage from '@/views/WorkWithMePage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.workWithMe);

export default function Page() {
	return <WorkWithMePage />;
}
