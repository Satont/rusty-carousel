import { MikroORM } from 'mikro-orm'
import config from '../mikro-orm.config'

export let orm: MikroORM
const start = async () => {
  orm = await MikroORM.init(config)
  console.info('Successfuly connected to DB')
}

start()
