import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'
import { env } from '@app/env'

export const addPhotoSchema = Joi.object().keys({
  album: Joi.string().required()
})

const add: RequestHandler = async (req, res) => {
  const { album }: { album: string } = req.body
  const files = req.files as Express.Multer.File[]
  const list = []
  if (files.length === 0) {
    throw new Error('no file to be uploaded')
  }
  for (const file of files) {
    await PhotoService.create({
      name: file.filename,
      path: `/${file.path}`,
      raw: `/photos/${album.toLowerCase()}/${file.filename}`,
      album
    })
    list.push({
      album,
      name: file.filename,
      path: '/' + file.path,
      raw: `${env.app.host}/photos/${album.toLowerCase()}/${file.filename}`
    })
  }
  res.send({
    message: 'OK',
    data: list
  })
}

export default requestMiddleware(add, { validation: { body: addPhotoSchema } })
