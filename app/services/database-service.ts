import { createConnection, getConnection } from 'typeorm'
import DatabaseOptions from '@lib/typeorm'
import logger from '@lib/logger'
import PhotoService from '@services/photo-service'
import populateData from '@app/start/populateData'

const DatabaseService = {
  async connect () {
    const options = await DatabaseOptions()
    await createConnection(options)
  },

  async close () {
    await DatabaseService.clear()
    await getConnection().close()
  },

  async clear () {
    console.info('Clearing database data for development purpose ...')
    await PhotoService.flush()
    logger.info('Successfully clear table data.')
  },

  async populateData () {
    logger.info('Populating data from album folder...')
    await populateData()
    console.info('Successfully load data.\n')
    console.info('Starting Express Server...')
  }
}

export default DatabaseService
