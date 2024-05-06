/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "store.istad.co",
          
            pathname: '/**',
          },
        ],
        domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com","i.pinimg.com","encrypted-tbn0.gstatic.com",
          "hips.hearstapps.com"
        ],
      },
};

export default nextConfig;
