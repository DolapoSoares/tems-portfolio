/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir:true,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com' , 'img.icons8.com'],
  }
}

module.exports = nextConfig
