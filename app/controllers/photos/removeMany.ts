import { RequestHandler } from 'express'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'

const removeMany: RequestHandler = async (req, res) => {
  const { body } = req
  for (const { album, documents } of body) {
    documents.split(',').map(async (el: string) => {
      const file = el.trim()
      await PhotoService.remove({ album, name: file })
    })
  }
  res.send({
    message: 'OK'
  })
}

export default requestMiddleware(removeMany)
