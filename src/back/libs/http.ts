import express from 'express'
import http from 'http'
import { resolve } from 'path'
import bodyparser from 'body-parser'
import carousel from '../routes/carousel'
import files from '../routes/files'
import items from '../routes/items'

const app = express()

app.use(bodyparser.json({ limit: '50mb' }))
app.use(bodyparser.urlencoded({ limit: '50mb' }))
app.use(bodyparser.text({ limit: '50mb' }))
app.use('/static', express.static(resolve(process.cwd(), 'public', 'dest')))
app.use('/api/carousels', carousel)
app.use('/api/files', files)
app.use('/api/items', items)

app.get('/', (req, res) => {
  res.sendFile(resolve(process.cwd(), 'public', 'index.html'))
})

http
  .createServer(app)
  .listen(process.env.PORT || 3000)
  .on('listening', () => console.info(`HTTP server started`))