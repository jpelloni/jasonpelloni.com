import SkillsPage from '@/views/SkillsPage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.skills);

export default function Page() {
	return <SkillsPage />;
}
