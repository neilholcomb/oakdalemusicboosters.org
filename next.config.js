/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/signup",
        destination:
          "https://docs.google.com/spreadsheets/d/1IVxUoQHW6ubHl9XigZAjDt-Imnn1JuaZIZJDGJdOrVQ/edit?usp=sharing",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
