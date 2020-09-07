import { createConnection } from 'typeorm'
import DatabaseOptions from '@lib/typeorm'
import logger from '@lib/logger'
import PhotoService from '@services/photo-service'

const DatabaseService = {
  async connect () {
    const options = await DatabaseOptions()
    return await createConnection(options)
  },

  async close () {
    console.info('Clearing database data for development purpose ...')
    await PhotoService.flush()
    logger.info('Successfully clear table data.')
  }
}

export default DatabaseService
