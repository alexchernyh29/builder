module.exports = {
    apps: [
      {
        name: 'mit',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        watch: true,
        script: './.output/server/index.mjs',
        max_memory_restart: '500M',
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
      }
    ]
  }