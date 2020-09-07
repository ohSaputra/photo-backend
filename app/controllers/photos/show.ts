import { RequestHandler } from 'express'
import { createReadStream } from 'fs'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'

const show: RequestHandler = async (req, res) => {
  const { album, filename } = req.params
  const photo = await PhotoService.findOne({
    album,
    name: filename
  })

  if (photo !== null && photo) {
    const readstream = createReadStream(photo.path.slice(1))
    readstream.pipe(res)
    readstream.on('error', err => { res.end(err) })
  }
  res.status(404).send({ message: 'not found' })
}

export default requestMiddleware(show)
