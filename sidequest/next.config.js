/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Required if you're using the <Image> component
	},
	basePath: "/your-repo-name", // Change to your GitHub repo name
	assetPrefix: "/your-repo-name", // Same as above
};

module.exports = nextConfig;
