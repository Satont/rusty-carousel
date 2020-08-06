import express from 'express'
import http from 'http'
import { resolve } from 'path'
import carousel from '../routes/carousel'

const app = express()

app.use('/static', express.static(resolve(process.cwd(), 'public', 'dest')))

app.get('/', (req, res) => {
  res.sendFile(resolve(process.cwd(), 'public', 'index.html'))
})

app.use('/api/carousels', carousel)

http
  .createServer(app)
  .listen(process.env.PORT || 3000)