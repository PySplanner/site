/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    allowedDevOrigins: [
        'localhost',
        '192.168.*.*',
        '100.*.*.*' // Tailscale
    ],
}

export default nextConfig
