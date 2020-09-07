import { RequestHandler } from 'express'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'

const add: RequestHandler = async (req, res) => {
  const { files }: { files: [] | any } = req
  const { album } = req.body
  const list = []
  for (const file of files) {
    await PhotoService.create({
      name: file.filename,
      path: '/' + file.path,
      raw: `/photos/${album.toLowerCase()}/${file.filename}`,
      album
    })
    list.push({
      album,
      name: file.filename,
      path: '/' + file.path,
      raw: `${process.env.APP_HOST}/photos/${album.toLowerCase()}/${file.filename}`,
    })
  }
  res.send({
    message: 'OK',
    data: list
  })
}

export default requestMiddleware(add)
