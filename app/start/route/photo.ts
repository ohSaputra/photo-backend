import { Router } from 'express'
import * as PhotosController from '@app/controllers/photos'
import upload from '@app/middlewares/upload'

const router = Router()

// Photo routes
router.post('/photos/list', PhotosController.list)
router.put('/photos', upload.array('documents'), PhotosController.add)
router.get('/photos/:album/:filename', PhotosController.show)
router.delete('/photos/:album/:filename', PhotosController.remove)
router.delete('/photos', PhotosController.removeMany)

export default router
