module.exports = {
  apps: [
    {
      name: 'youth-strapi',
      script: 'pm2 start server.js',
      watch: './',
      env: {
        MODE: 'development',
      },
      env_production: {
        MODE: 'production',
      },
    },
  ],
}
