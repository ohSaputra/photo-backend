import { RequestHandler } from 'express'
import { createReadStream } from 'fs'
import { capitalFirst } from '@middlewares/string'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'

const show: RequestHandler = async (req, res) => {
  const { album, filename } = req.params
  const photo = await PhotoService.findOne({
    album: capitalFirst(album),
    name: filename
  })
  if (photo != null && photo !== undefined) {
    const readstream = createReadStream(photo.path.slice(1))
    readstream.pipe(res)
    readstream.on('error', err => { res.end(err) })
  } else {
    res.status(404).send({ message: 'not found' })
  }
}

export default requestMiddleware(show)
