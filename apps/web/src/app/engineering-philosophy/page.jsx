import EngineeringPhilosophyPage from '@/views/EngineeringPhilosophyPage.jsx';
import { pageMetadata, pages } from '@/lib/pages.js';

export const metadata = pageMetadata(pages.engineeringPhilosophy);

export default function Page() {
	return <EngineeringPhilosophyPage />;
}
