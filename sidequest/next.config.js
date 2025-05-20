/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Required if you're using the <Image> component
	},
	basePath: "/HidayatPatil.github.io", // Change to your GitHub repo name
	assetPrefix: "/HidayatPatil.github.io", // Same as above
};

module.exports = nextConfig;
