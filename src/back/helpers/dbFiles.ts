import { orm } from '../libs/db'
import { File } from '../models/File'

export const uploadFile = async (opts: { name: string, data: string, type: string }) => {
  console.log('before')
  const file = orm.em.getRepository(File).create(opts)
  console.log('after', file)
  await orm.em.persistAndFlush(file)

  return file
}

export const getFile = async ({ id, name }: { id?: number, name?: string }) => {
  const where = { id, name }

  return await orm.em.getRepository(File).findOneOrFail(where)
}

export const getFiles = async () => {
  return await orm.em.getRepository(File).findAll()
}