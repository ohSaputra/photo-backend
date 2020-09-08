import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'
import { cleanUUID } from '@middlewares/string'
import { env } from '@app/env'

export const listPhotoSchema = Joi.object().keys({
  skip: Joi.number().required(),
  limit: Joi.number().required()
})

const list: RequestHandler = async (req, res) => {
  const { skip, limit } = req.body
  const photos = await PhotoService.list({ skip, limit })
  const photosUpdated = []
  for (const { id, album, name, path, raw } of photos[0]) {
    const obj = {
      id: cleanUUID(id),
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

export default requestMiddleware(list, { validation: { body: listPhotoSchema } })
