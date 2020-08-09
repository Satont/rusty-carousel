import { Router } from 'express'
import { orm } from '../libs/db'
import { Item } from '../models/Item'

const route = Router()

route.get('/', async (req, res) => {
  const items = await orm.em.getRepository(Item).findAll({ populate: true })
  res.json(items)
})

route.get('/:id', async (req, res) => {
  const carousel = await orm.em.getRepository(Item).findOneOrFail({ id: Number(req.params.id) }, true)
  res.json(carousel)
})

route.post('/', async (req, res) => {
  const item = orm.em.getRepository(Item).create(req.body)
  await orm.em.persistAndFlush(item)

  res.json(item)
})

route.delete('/:id', async (req, res) => {
  await orm.em.getRepository(Item).remove({ id: Number(req.params.id) })

  res.send('Ok')
})

export default route