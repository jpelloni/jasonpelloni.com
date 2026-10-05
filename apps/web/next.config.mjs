/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export for S3 + CloudFront (infra/site/).
	output: 'export',
	images: { unoptimized: true },
};

export default nextConfig;
