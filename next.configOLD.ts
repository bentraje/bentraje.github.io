const createMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

// Merge MDX config with Next.js config
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Use CommonJS export
module.exports = withMDX(nextConfig);



// import type { NextConfig } from "next";
// import createMDX from '@next/mdx'


// const nextConfig: NextConfig = {
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   output: 'export',  
// };

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// })

// export default withMDX(nextConfig);
