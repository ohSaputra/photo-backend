import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import apiSpec from '../openapi.json'
import upload from '@app/middlewares/upload'

import * as PhotosController from '@app/controllers/photos'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
}

const router = Router()

// Book routes
router.post('/photos/list', PhotosController.list)
router.put('/photos', upload.array('documents'), PhotosController.add)
router.get('/photos/:album/:filename', PhotosController.show)
router.delete('/photos/:album/:filename', PhotosController.remove)
router.delete('/photos', PhotosController.removeMany)


// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve)
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions))
}

export default router
