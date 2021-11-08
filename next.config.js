const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esmodule: true,
  inlineImageLimit: false,
  fileExtensions: ["jpg", "jpeg", "png", "svg", "gif", "ico", "webp", "jp2", "avif"],
  images: {
    domains: [''],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_BASEAPI_URL
  }
})