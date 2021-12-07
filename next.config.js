/* 

Dit werkt niet maar illustreert wat ik moet bereiken

const withTM = require('@vercel/edge-functions-ui/transpile')()

module.exports = withTM(), {
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
*/

/* 
Dit werkt maar ik heb react strict mode en url imports wel gewoon nodig...

const withTM = require('@vercel/edge-functions-ui/transpile')()

module.exports = withTM()

*/


module.exports = {

  presets: [require('@vercel/edge-functions-ui/transpile')],
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