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
  },
  async redirects() {
    return [
      {
        source: '/r/discord',
        destination: 'https://discord.gg/hsvH3898Pq',
        permanent: true
      },
      {
        source: '/r/hsvH3898Pq',
        destination: 'https://discord.gg/hsvH3898Pq',
        permanent: true
      },
      {
        source: '/r/twitter',
        destination: 'https://twitter.com/traumallamas',
        permanent: true
      },
      {
        source: '/r/instagram',
        destination: 'https://instagram.com/trauma_llamas',
        permanent: true
      }
    ]
  }
}
