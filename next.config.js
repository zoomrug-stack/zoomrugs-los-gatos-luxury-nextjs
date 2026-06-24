/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  // Workaround for localhost.run/serveo.net cross-origin blocking
  // Allows the dev server to be accessed from the tunnel URL
  allowedDevOrigins: [
    'https://8a52a6d2ba928e.lhr.life',
    'https://c05ecbf303392d.lhr.life',
    'https://ca3726b91ac46d55-187-124-243-139.serveousercontent.com',
    'https://3a98a2ee1112842-187-124-243-139.serveousercontent.com',
    'https://95763ac39afc3426-187-124-243-139.serveousercontent.com',
    'https://9197efd9689bc9.lhr.life',
    'https://186cc96011b961.lhr.life',
    'https://3ce7373a680b57.lhr.life',
    'https://f8baaf7d9db119.lhr.life',
    'https://giant-ravens-heal.loca.lt',
    'https://thirty-taxes-give.loca.lt',
  ],
};

module.exports = nextConfig;
