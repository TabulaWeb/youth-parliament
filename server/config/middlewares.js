module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: ['http://localhost:1337', 'http://85.193.90.213', 'https://mp60.ru', '*']
    }
  },
];
