module.exports = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    urlImports: [
      'https://cdn.skypack.dev',
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
    ],
  }
}

