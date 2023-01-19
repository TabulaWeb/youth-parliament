module.exports = () => {
  return {
      ckeditor: true,
      "vercel-deploy": {
        enabled: true,
        config: {
          deployHook:
            "https://api.vercel.com/v1/integrations/deploy/prj_40wj75dr9ls6nmxZt6mUNe1FqdAI/R34GI4aBpN",
          apiToken: "HQ7gj77hkXQuZXxoLgGwkZDe",
          appFilter: "youth-parliament-wuyk",
          teamFilter: "tabulaweb",
          roles: ["strapi-super-admin"],
        },
      }
  }
}

// https://api.vercel.com/v1/integrations/deploy/prj_40wj75dr9ls6nmxZt6mUNe1FqdAI/R34GI4aBpN