import { RequestHandler } from 'express'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'
import { env } from '@app/env'

const list: RequestHandler = async (req, res) => {
  const { skip, limit } = req.body
  const photos = await PhotoService.list({ skip, limit })
  const photosUpdated = []
  for (const { id, album, name, path, raw } of photos[0]) {
    const obj = {
      id,
      album,
      name,
      path,
      raw: `${env.app.host}${raw}`
    }
    photosUpdated.push(obj)
  }
  res.send({
    message: 'OK',
    documents: photosUpdated,
    count: photos[1],
    skip,
    limit
  })
}

export default requestMiddleware(list)
