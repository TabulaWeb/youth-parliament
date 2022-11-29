module.exports = {
  apps: [
    {
      name: 'youth-site',
      script: 'next start -p 5000',
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
