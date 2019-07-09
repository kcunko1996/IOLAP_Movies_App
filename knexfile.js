module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: '127.0.0.1',
      database: 'movies_db',
      user: 'postgres',
      password: 'mojasifra',
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  staging: {  },

  test: {  },

  production: {  },
}