module.exports = {
  apps: [
    {
      name: 'youth-strapi',
      script: 'strapi start',
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
