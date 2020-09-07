import { RequestHandler } from 'express'
import requestMiddleware from '@middlewares/request'
import PhotoService from '@services/photo-service'

const remove: RequestHandler = async (req, res) => {
  const { album, filename } = req.params
  await PhotoService.remove({ album, name: filename })
  res.send({
    message: 'OK'
  })
}

export default requestMiddleware(remove)
