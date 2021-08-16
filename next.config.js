module.exports = {
  webpack(config) {
    return config
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  images: {
    domains: []
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
