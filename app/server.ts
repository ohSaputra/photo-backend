/* eslint-disable import/first */
import 'reflect-metadata'
import 'module-alias/register'

import app from '@app/index'
import logger from '@lib/logger'
import DatabaseService from '@services/database-service'
import populateData from '@app/populateData'

const port: string = app.get('port')

DatabaseService.connect()
  .then(() => {
    logger.info('Populating data from album folder...')
    // Populate static album
    populateData()
    console.info('Successfully load data.\n')
    console.info('Starting Express Server...')

    app.listen(port, () => {
      console.log('\x1b[36m%s\x1b[0m', `Express server started at http://localhost:${port}`)
      console.log('\x1b[36m%s\x1b[0m', `Swagger UI hosted at http://localhost:${port}/dev/api-docs`)
    })
  })
  .catch(e => { throw e })

// Close any services, when receiving SIGINT
process.on('SIGINT', () => {
  logger.info('Gracefully shutting down')
  DatabaseService.close()
    .then(() => { process.exit(0) })
    .catch(e => { throw e })
})
