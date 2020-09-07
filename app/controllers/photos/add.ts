import { RequestHandler } from 'express'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'
import { env } from '@app/env'

const add: RequestHandler = async (req, res) => {
  const { album }: { album: string } = req.body
  const files = req.files as Express.Multer.File[]
  const list = []
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

export default requestMiddleware(add)
