import { createConnection } from 'typeorm'
import DatabaseOptions from '@lib/typeorm'
import logger from '@lib/logger'
import PhotoService from '@services/photo-service'

const DatabaseService = {
  async connect () {
    try {
      const options = await DatabaseOptions()
      return await createConnection(options)
    } catch (e) {
      throw e
    }
  },

  async close () {
    try {
    console.log('Trying to clear data for development purpose ...')
    await PhotoService.flush()
    console.log('Successfully clear the table.\n')
    } catch (e) {
      throw e
    }
  }
}

export default DatabaseService
