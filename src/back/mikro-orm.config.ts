require('dotenv').config()

export default {
  migrations: {
    tableName: 'migrations',
    path: './data/migrations',
    transactional: true,
    emit: 'ts'
  },
  baseDir: process.cwd(),
  type: 'postgresql',  
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entitiesDirs: ['./dest/models'],
  entitiesDirsTs: ['./src/back/models'],
}