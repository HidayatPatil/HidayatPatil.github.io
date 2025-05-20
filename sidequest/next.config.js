/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Required if you're using the <Image> component
	},
	basePath: "/out/index.html", // Change to your GitHub repo name
	assetPrefix: "/out/index.html", // Same as above
};

module.exports = nextConfig;
