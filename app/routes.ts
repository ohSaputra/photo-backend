import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import apiSpec from '../openapi.json'
import upload from '@app/middlewares/upload'
import { env } from '@app/env'

import * as PhotosController from '@app/controllers/photos'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
}

const router = Router()

router.get('/health', (req, res) => res.json())

// Photo routes
router.post('/photos/list', PhotosController.list)
router.put('/photos', upload.array('documents'), PhotosController.add)
router.get('/photos/:album/:filename', PhotosController.show)
router.delete('/photos/:album/:filename', PhotosController.remove)
router.delete('/photos', PhotosController.removeMany)

// Dev routes
if (env.isDevelopment) {
  router.use('/dev/api-docs', swaggerUi.serve)
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions))
}

export default router
