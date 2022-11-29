module.exports = {
  apps: [
    {
      name: 'youth-site',
      script: 'next start -p 6000',
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
