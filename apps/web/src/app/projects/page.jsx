import ProjectsPage from '@/views/ProjectsPage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.projects);

export default function Page() {
	return <ProjectsPage />;
}
