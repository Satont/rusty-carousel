import { MikroORM } from 'mikro-orm'

export let orm: MikroORM
const start = async () => {
  const config = process.env.MONGODB_URL && process.env.MONGODB_URL.length ? {
    clientUrl: process.env.MONGODB_URL
  } : {
    dbName: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
  
  // @ts-ignore
  orm = await MikroORM.init({
    baseDir: process.cwd(),
    type: 'mongo',  
    ...config,
    entitiesDirs: ['./dest/models'],
    entitiesDirsTs: ['./src/back/models'],
    debug: true
  })
  console.info('Successfuly connected to MongoDB')
}

start()
