import { Router } from 'express'
import { orm } from '../libs/db'
import { Carousel } from '../models/Carousel'

const route = Router()

route.get('/', async (req, res) => {
  const carousels = await orm.em.getRepository(Carousel).findAll({ populate: true })
  res.json(carousels)
})

route.get('/:id', async (req, res) => {
  const carousel = await orm.em.getRepository(Carousel).findOneOrFail({ id: Number(req.params.id) }, true)
  res.json(carousel)
})

route.post('/', async (req, res) => {
  const item = orm.em.getRepository(Carousel).create(req.body)
  await orm.em.persistAndFlush(item)

  res.json(item)
})

route.delete('/:id', async (req, res) => {
  await orm.em.getRepository(Carousel).remove({ id: Number(req.params.id) })

  res.send('Ok')
})

export default route