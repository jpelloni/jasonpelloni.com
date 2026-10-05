import Link from 'next/link';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button.jsx';

export const metadata = { title: 'Page Not Found - Jason Pelloni' };

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 flex items-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
					<p className="text-sm font-medium text-primary mb-2">404</p>
					<h1 className="text-4xl font-bold tracking-tight mb-4">Page not found</h1>
					<p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
					<Button asChild>
						<Link href="/">Back to home</Link>
					</Button>
				</div>
			</main>
			<Footer />
		</div>
	);
}
