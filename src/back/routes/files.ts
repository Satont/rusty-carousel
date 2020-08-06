import { Router } from 'express'
import { uploadFile, getFile, getFiles } from '../helpers/dbFiles'

const route = Router()

route.get('/:id', async (req, res) => {
  const file = await getFile({ id: Number(req.params.id) })
  res.send(file)
})

route.post('/upload', async (req, res) => {
  console.log(req.body)
  await uploadFile({ name: req.body.name, type: req.body.type, data: req.body.data })
  res.send('Ok')
})

route.get('/', async (req, res) => {
  const files = await getFiles()
  res.send(files)
})

export default route