module.exports = {
  webpack(config) {
    return config
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
