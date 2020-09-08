import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import apiSpec from '../../../openapi.json'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
}

const router = Router()

router.use('/dev/api-docs', swaggerUi.serve)
router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions))

export default router
